/**
 * Logo processing script — Phase 8 Authority & Proof Layer
 *
 * Reads originals from public/images/proof/logos/originals/
 * Writes monochrome WebP assets to public/images/proof/logos/webp/
 *
 * Algorithm:
 *  - Images with real transparency (alpha channel with transparent pixels):
 *    Re-color every opaque pixel to the target light-gray; keep original alpha.
 *  - Images without transparency (JPEG, AVIF, solid PNG):
 *    Sample corner brightness to decide if background is light or dark,
 *    then build a synthetic alpha channel from the inverted or direct
 *    grayscale values so the logo mark becomes opaque and the background
 *    becomes transparent.
 *  - All outputs are trimmed of excessive transparent margins then saved
 *    as quality-85 WebP.
 */

import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const inputDir = path.join(root, 'public/images/proof/logos/originals');
const outputDir = path.join(root, 'public/images/proof/logos/webp');

fs.mkdirSync(outputDir, { recursive: true });

// Target monochrome color — light neutral gray (#D8DCE3)
const TARGET = { r: 216, g: 220, b: 227 };

const LOGOS = [
  { input: 'AIG.png',        output: 'aig.webp' },
  { input: 'BBVA.avif',      output: 'bbva.webp' },
  { input: 'BNP.jpg',        output: 'bnp.webp' },
  { input: 'Caixa.png',      output: 'caixa.webp' },
  { input: 'Chubb.png',      output: 'chubb.webp' },
  { input: 'ENEL.jpg',       output: 'enel.webp' },
  { input: 'Santander.webp', output: 'santander.webp' },
  { input: 'Telefonica.png', output: 'telefonica.webp' },
];

/** Smoothstep — maps t ∈ [0,1] to [0,1] with S-curve easing */
function smoothstep(t) {
  const c = Math.max(0, Math.min(1, t));
  return c * c * (3 - 2 * c);
}

/**
 * Sample average brightness of a block of pixels (grayscale, 1 channel).
 * Uses the four corners of a `size × size` region.
 */
function sampleCorners(data, w, h, size) {
  let sum = 0;
  let count = 0;
  const s = Math.min(size, w, h);
  for (let y = 0; y < s; y++) {
    for (let x = 0; x < s; x++) {
      sum += data[y * w + x];                               // top-left
      sum += data[y * w + (w - 1 - x)];                    // top-right
      sum += data[(h - 1 - y) * w + x];                    // bottom-left
      sum += data[(h - 1 - y) * w + (w - 1 - x)];         // bottom-right
      count += 4;
    }
  }
  return sum / count;
}

async function processLogo({ input, output }) {
  const inputPath = path.join(inputDir, input);
  const outputPath = path.join(outputDir, output);

  const meta = await sharp(inputPath).metadata();
  const { width: W, height: H } = meta;

  console.log(`\n▶  ${input}  (${W}×${H}, hasAlpha=${meta.hasAlpha})`);

  // ── Case A: image has an alpha channel ────────────────────────────────────
  if (meta.hasAlpha) {
    // Get RGBA pixels
    const { data: rgba, info } = await sharp(inputPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const w = info.width;
    const h = info.height;
    const pixels = w * h;

    // Check if there are genuinely transparent pixels (not just an alpha channel
    // filled entirely with 255)
    let minAlpha = 255;
    for (let i = 0; i < pixels; i++) minAlpha = Math.min(minAlpha, rgba[i * 4 + 3]);

    if (minAlpha === 0) {
      // Real transparency — re-color opaque pixels to target, keep alpha
      console.log('   → transparent PNG: re-coloring opaque pixels');
      const out = Buffer.alloc(pixels * 4);
      for (let i = 0; i < pixels; i++) {
        const a = rgba[i * 4 + 3];
        out[i * 4 + 0] = TARGET.r;
        out[i * 4 + 1] = TARGET.g;
        out[i * 4 + 2] = TARGET.b;
        out[i * 4 + 3] = a;
      }
      await sharp(out, { raw: { width: w, height: h, channels: 4 } })
        .trim({ threshold: 5 })
        .webp({ quality: 85 })
        .toFile(outputPath);
    } else {
      // Alpha channel but no transparent pixels — treat as solid (fall through to Case B)
      console.log('   → solid PNG (alpha channel fully opaque): treating as flat');
      await processSolid(inputPath, outputPath, W, H);
    }
  } else {
    // ── Case B: no alpha channel (JPEG, AVIF, solid PNG) ──────────────────
    await processSolid(inputPath, outputPath, W, H);
  }

  const kb = Math.round(fs.statSync(outputPath).size / 1024);
  console.log(`   ✓ ${output}  (${kb} KB)`);
}

/**
 * Build a synthetic RGBA buffer for images without real transparency.
 * Corner brightness determines whether to treat the background as light or dark.
 */
async function processSolid(inputPath, outputPath, W, H) {
  // Down-sample to a working resolution to keep memory reasonable
  const WORK_W = Math.min(W, 800);
  const WORK_H = Math.round(H * (WORK_W / W));

  const { data: grayData, info } = await sharp(inputPath)
    .resize(WORK_W, WORK_H, { fit: 'fill', kernel: 'lanczos3' })
    .grayscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;

  // Sample corners (8% of shortest dimension, at least 5px)
  const cornerSize = Math.max(5, Math.floor(Math.min(w, h) * 0.08));
  const avgBg = sampleCorners(grayData, w, h, cornerSize);
  const isLightBg = avgBg > 150;

  console.log(`   → solid: bg=${isLightBg ? 'LIGHT' : 'DARK'} (corner avg ${avgBg.toFixed(0)})`);

  const pixels = w * h;
  const out = Buffer.alloc(pixels * 4);

  for (let i = 0; i < pixels; i++) {
    const gray = grayData[i];

    // Raw alpha signal: high = logo mark, low = background
    let signal;
    if (isLightBg) {
      // Dark mark on light background → invert so the mark has a high signal
      signal = 255 - gray;
    } else {
      // Light mark on dark background → use grayscale directly
      signal = gray;
    }

    // Soft threshold (S-curve): values below 40 → fully transparent;
    //                            values above 210 → fully opaque
    let alpha;
    if (signal <= 40) {
      alpha = 0;
    } else if (signal >= 210) {
      alpha = 255;
    } else {
      const t = (signal - 40) / 170;
      alpha = Math.round(255 * smoothstep(t));
    }

    out[i * 4 + 0] = TARGET.r;
    out[i * 4 + 1] = TARGET.g;
    out[i * 4 + 2] = TARGET.b;
    out[i * 4 + 3] = alpha;
  }

  await sharp(out, { raw: { width: w, height: h, channels: 4 } })
    .trim({ threshold: 5 })
    .webp({ quality: 85 })
    .toFile(outputPath);
}

(async () => {
  console.log('Logo processing — Phase 8 Authority & Proof Layer\n');
  console.log(`Input : ${inputDir}`);
  console.log(`Output: ${outputDir}`);

  const errors = [];
  for (const logo of LOGOS) {
    try {
      await processLogo(logo);
    } catch (err) {
      console.error(`\n✗  ${logo.input}: ${err.message}`);
      errors.push(logo.input);
    }
  }

  console.log('\n─────────────────────────────────────────');
  if (errors.length === 0) {
    console.log(`✅  All ${LOGOS.length} logos processed successfully.`);
  } else {
    console.log(`⚠  ${errors.length} error(s): ${errors.join(', ')}`);
    process.exit(1);
  }
})();
