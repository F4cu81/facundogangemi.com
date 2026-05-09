# ASSET INVENTORY — facundogangemi.com

## Document Purpose

This document defines the visual, media and downloadable assets required to build the new facundogangemi.com website.

It supports:

- homepage development
- future internal pages
- Insights / Blog content
- Case Studies
- Speaking page
- Contact page
- SEO and social sharing
- GitHub Pages static deployment

The asset system must support the approved brand direction:

> Executive AI Premium

The website must feel:

- executive
- premium
- modern
- AI-native
- enterprise-grade
- realistic
- fast
- visually coherent

Assets must not feel:

- generic stock
- overly futuristic
- cyberpunk
- AI-generated in an obvious way
- low-resolution
- inconsistent with the brand
- too casual for executive advisory

---

# 1. Recommended Asset Folder Structure

Use this structure inside the project:

```text
public/
   assets/
      logos/
      portraits/
      images/
      backgrounds/
      icons/
      case-studies/
      insights/
      speaking/
      documents/
      og/
      favicon/
```

## Folder Purpose

| Folder | Purpose |
|---|---|
| `/logos` | Company logos, personal mark, partner/client logos |
| `/portraits` | Professional photos of Facundo |
| `/images` | General website images |
| `/backgrounds` | Hero backgrounds, gradients, AI patterns |
| `/icons` | SVG icons and UI symbols |
| `/case-studies` | Case study visuals |
| `/insights` | Blog / Insights article featured images |
| `/speaking` | Speaking photos, stage images, keynote assets |
| `/documents` | PDFs, speaker kit, executive bio, downloads |
| `/og` | Open Graph / social preview images |
| `/favicon` | favicon and app icons |

---

# 2. Priority Asset List

## Priority 1 — Required for Homepage MVP

These assets are required before building or polishing the homepage.

| Asset | Folder | Required? | Notes |
|---|---|---:|---|
| Hero executive portrait | `/assets/portraits` | Yes | Main homepage portrait. Must look realistic and premium. |
| About snapshot portrait | `/assets/portraits` | Yes | Can be same as hero initially, but ideally warmer and more human. |
| Logo / wordmark | `/assets/logos` | Yes | Personal brand mark or text logo: Facundo Gangemi. |
| Trusted organization logos | `/assets/logos` | Yes | Santander, BBVA, CaixaBank, Kruger, Mercantil Andina, Telefónica. |
| Hero background pattern | `/assets/backgrounds` | Yes | Subtle AI line network or radial gradient. |
| Service icons | `/assets/icons` | Yes | AI Strategy, Digital Transformation, Operating Models, Executive Advisory. |
| Case study placeholder visuals | `/assets/case-studies` | Yes | 3 premium abstract visuals for homepage preview. |
| Insight placeholder visuals | `/assets/insights` | Yes | 3 editorial visuals for homepage preview. |
| Open Graph homepage image | `/assets/og` | Yes | Used for social sharing. |
| Favicon | `/assets/favicon` | Yes | Minimal FG or personal brand icon. |

---

## Priority 2 — Required for Full Website Launch

| Asset | Folder | Required? | Notes |
|---|---|---:|---|
| Speaking / presentation photo | `/assets/speaking` | Yes | Needed for Speaking page and authority sections. |
| Speaker kit PDF | `/assets/documents` | Optional launch / Required later | Bio, headshots, talk abstracts. |
| Executive bio PDF | `/assets/documents` | Optional | Useful for About and Speaking pages. |
| Case study detail visuals | `/assets/case-studies` | Yes | One per case study. |
| Insight article visuals | `/assets/insights` | Yes | One per featured article. |
| Contact portrait thumbnail | `/assets/portraits` | Optional | Small portrait for Contact page right panel. |
| Assessment visual | `/assets/images` or `/assets/backgrounds` | Optional | Could be generated as UI component instead. |
| Footer logo variation | `/assets/logos` | Yes | White/light version for dark footer. |

---

## Priority 3 — Future Enhancements

| Asset | Folder | Required? | Notes |
|---|---|---:|---|
| Video hero loop | `/assets/videos` | No | Optional later; avoid for MVP performance. |
| Keynote reel | `/assets/speaking` | No | Useful for Speaking page later. |
| Downloadable frameworks | `/assets/documents` | No | AI Strategy Framework PDF, Operating Model PDF. |
| AI Maturity Assessment PDF report template | `/assets/documents` | No | Useful if assessment becomes automated. |
| Newsletter cover visual | `/assets/og` or `/assets/images` | No | Useful for Executive Briefing branding. |
| Spanish version OG images | `/assets/og` | No | Needed when `/es/` version launches. |

---

# 3. Portrait Assets

## 3.1 Hero Portrait

### File Name Recommendation

```text
facundo-hero-executive.webp
```

### Folder

```text
public/assets/portraits/
```

### Usage

- Homepage hero
- Open Graph image composition
- possible About hero

### Visual Direction

The image should feel:

- ultra-realistic
- executive
- premium
- strategic
- calm
- confident
- approachable
- modern

### Wardrobe

Recommended:

- dark navy blazer
- black or dark turtleneck / shirt
- premium business casual
- minimal styling

Avoid:

- overly formal outdated suit styling
- casual T-shirt look
- exaggerated fashion elements

### Background

Recommended:

- dark executive environment
- subtle AI-inspired ambience
- soft depth of field
- deep navy or charcoal tones

Avoid:

- obvious AI-generated background
- busy office stock environment
- unrealistic glow effects

### Composition

Recommended:

- chest-up or waist-up
- looking slightly off-camera
- strong executive posture
- enough negative space for hero composition

### Technical Requirements

- format: WebP or AVIF
- fallback: JPG if necessary
- width: 1200px to 1800px
- optimized file size
- transparent background optional, but not required

---

## 3.2 About Snapshot Portrait

### File Name Recommendation

```text
facundo-about-portrait.webp
```

### Usage

- About snapshot on homepage
- About page

### Visual Direction

Slightly warmer and more human than the hero portrait.

Should still feel:

- executive
- senior
- credible
- approachable

Possible tone:

- strategic conversation
- calm portrait
- premium personal branding photo

---

## 3.3 Speaking Portrait / Stage Photo

### File Name Recommendation

```text
facundo-speaking-stage.webp
```

### Usage

- Speaking strip on homepage
- Speaking page hero
- speaker kit

### Visual Direction

Should show Facundo:

- presenting
- leading a session
- speaking to executives
- in a meeting room or stage environment

It should feel:

- real
- credible
- professional
- not staged in an unrealistic way

---

# 4. Logo Assets

## 4.1 Personal Brand Logo

### Recommended Files

```text
facundo-gangemi-logo-dark.svg
facundo-gangemi-logo-light.svg
facundo-gangemi-mark.svg
```

### Folder

```text
public/assets/logos/
```

### Usage

- Navbar
- Footer
- favicon basis
- OG images

### Visual Direction

The logo should feel:

- minimal
- executive
- modern
- premium
- readable

Possible formats:

- text wordmark: Facundo Gangemi
- FG monogram
- simple personal mark

Avoid:

- legacy logo if it feels too casual or outdated
- overly complex circular badge if it does not match Executive AI Premium
- low-resolution raster logo

---

## 4.2 Trusted Organization Logos

### Recommended Files

```text
logo-santander.svg
logo-bbva.svg
logo-caixabank.svg
logo-kruger.svg
logo-mercantil-andina.svg
logo-telefonica.svg
```

### Folder

```text
public/assets/logos/trusted/
```

### Usage

- TrustBar
- About page
- Case Studies page

### Treatment

Use monochrome / white / light gray versions where possible.

Logos should be visually balanced in height.

Avoid colorful versions in the hero/trust bar unless required.

### Legal / Accuracy Note

Use logos only if you are comfortable referencing those organizations based on real experience and professional context. Avoid implying formal endorsement unless explicitly allowed.

Recommended wording:

- Experience with organizations operating at enterprise scale
- Trusted across enterprise transformation environments
- Selected organizations from professional experience

Avoid wording:

- Official partners
- Certified by
- Endorsed by

unless legally accurate.

---

# 5. Background Assets

## 5.1 Hero Background

### File Name Recommendation

```text
hero-ai-network-bg.svg
```

or

```text
hero-ai-gradient-bg.webp
```

### Folder

```text
public/assets/backgrounds/
```

### Usage

- Homepage hero
- optional AI Strategy page hero

### Visual Direction

Should include:

- deep navy base
- subtle radial gradient
- low-opacity AI network lines
- small particles
- restrained glow

Avoid:

- cyberpunk aesthetic
- bright neon grid
- robot / brain / hologram clichés
- heavy animated files

### Technical Requirements

Preferred:

- SVG for line network
- CSS gradient for background
- lightweight WebP if raster image required

Target:

- less than 100kb if possible

---

## 5.2 Section Background Patterns

### Recommended Files

```text
pattern-ai-lines.svg
pattern-data-flow.svg
pattern-enterprise-grid.svg
```

### Usage

- final CTA band
- assessment block
- framework section
- dark cards

### Visual Direction

Very subtle.

Opacity should usually be below 10%.

---

# 6. Icon Assets

## Recommended Approach

Use a consistent SVG icon system instead of random image icons.

Recommended libraries:

- Lucide
- Phosphor

Do not mix multiple icon styles.

## Required Icons

| Concept | Suggested Icon Direction |
|---|---|
| AI Strategy | brain circuit, network node, spark within system |
| Digital Transformation | connected layers, system map, transformation arrows |
| Enterprise Agility | flow, layers, connected teams |
| Executive Advisory | briefcase, compass, boardroom, strategy map |
| Strategy Readiness | target, compass, map |
| Operating Model Readiness | layers, workflow, architecture |
| Adoption Readiness | users, network, change path |
| Email | mail icon |
| Calendar / Call | calendar icon |
| LinkedIn | LinkedIn icon |
| Arrow CTA | simple right arrow |

## Folder

```text
public/assets/icons/
```

## Format

Preferred:

- inline SVG through components
- or local SVG files if needed

---

# 7. Case Study Assets

## Folder

```text
public/assets/case-studies/
```

## Homepage Required Visuals

### Case Study 1 — Banking Transformation

Recommended file:

```text
case-banking-transformation.webp
```

Visual direction:

- financial district / modern building
- abstract banking data flow
- enterprise architecture visual
- no generic smiling business team

---

### Case Study 2 — Operating Model

Recommended file:

```text
case-operating-model.webp
```

Visual direction:

- layered system diagram
- enterprise operating model abstraction
- strategic boardroom / transformation map

---

### Case Study 3 — AI Adoption Readiness

Recommended file:

```text
case-ai-adoption-readiness.webp
```

Visual direction:

- AI network + organization layers
- diagnostic / roadmap visual
- subtle executive technology aesthetic

---

## Case Study Visual Rules

Use:

- abstract enterprise visuals
- dark navy overlays
- subtle data patterns
- premium editorial style

Avoid:

- screenshots unless visually polished
- generic stock office photos
- literal Agile board images
- low-quality diagrams

---

# 8. Insights Assets

## Folder

```text
public/assets/insights/
```

## Homepage Required Visuals

### Insight 1 — AI Strategy

Recommended file:

```text
insight-ai-does-not-transform.webp
```

Visual direction:

- AI network
- executive strategy abstraction
- subtle intelligence system

---

### Insight 2 — Operating Models

Recommended file:

```text
insight-ai-operating-model.webp
```

Visual direction:

- layered architecture
- operating model grid
- connected system map

---

### Insight 3 — Transformation Gap

Recommended file:

```text
insight-transformation-gap.webp
```

Visual direction:

- bridge between strategy and execution
- enterprise flow lines
- abstract transformation path

---

## Insights Visual Rules

Insights should feel like an executive publication.

Recommended:

- editorial abstract visuals
- data-inspired imagery
- minimal premium photography
- strong contrast
- consistent visual templates

Avoid:

- casual blog thumbnails
- colorful generic illustrations
- AI-generated images with obvious artifacts

---

# 9. Speaking Assets

## Folder

```text
public/assets/speaking/
```

## Required / Recommended Files

```text
speaking-hero-stage.webp
speaking-boardroom-session.webp
speaking-workshop-executive.webp
```

## Usage

- Homepage SpeakingStrip
- Speaking page hero
- speaker kit
- Open Graph image for speaking page

## Visual Direction

Images should show:

- Facundo presenting
- executive audience
- strategic session
- boardroom or conference environment

The tone should feel:

- credible
- professional
- premium
- real

Avoid:

- empty stage without context
- fake conference lighting
- overly dramatic AI visuals
- low-resolution event images

---

# 10. Document Assets

## Folder

```text
public/assets/documents/
```

## Future Documents

| Document | File Name | Priority |
|---|---|---:|
| Executive Bio PDF | `facundo-gangemi-executive-bio.pdf` | Medium |
| Speaker Kit PDF | `facundo-gangemi-speaker-kit.pdf` | Medium |
| AI Strategy Framework PDF | `ai-strategy-framework.pdf` | Later |
| Intelligent Operating Model PDF | `intelligent-operating-model.pdf` | Later |
| AI Maturity Assessment sample report | `ai-maturity-assessment-sample.pdf` | Later |

## Notes

These PDFs are not mandatory for MVP unless they are linked from visible CTAs.

If a CTA says "Download", the corresponding asset must exist before launch.

---

# 11. Open Graph and Social Assets

## Folder

```text
public/assets/og/
```

## Required Files

```text
og-home.webp
og-about.webp
og-advisory.webp
og-insights.webp
og-case-studies.webp
og-speaking.webp
```

## Homepage OG Direction

`og-home.webp` should include:

- Facundo executive portrait
- dark navy background
- subtle AI network pattern
- headline: AI Strategy & Enterprise Transformation Advisor
- minimal branding

Recommended dimensions:

```text
1200 x 630 px
```

## Visual Rules

- text must be readable at small preview size
- no excessive detail
- no overdesigned graphics
- consistent with homepage hero

---

# 12. Favicon and App Icons

## Folder

```text
public/assets/favicon/
```

## Required Files

```text
favicon.ico
favicon.svg
apple-touch-icon.png
icon-192.png
icon-512.png
```

## Visual Direction

Use:

- FG monogram
- simple personal mark
- deep navy background
- accent detail if needed

Avoid:

- complex circular logo that becomes unreadable at small sizes
- detailed illustration

---

# 13. Asset Naming Conventions

Use lowercase filenames.

Use hyphens instead of spaces.

Use descriptive names.

Recommended:

```text
facundo-hero-executive.webp
case-banking-transformation.webp
insight-ai-operating-model.webp
logo-santander.svg
hero-ai-network-bg.svg
```

Avoid:

```text
IMG_1234.jpg
final-final-photo.png
logo new version.png
heroimage2.jpeg
```

---

# 14. Asset Format Guidelines

## Photos

Preferred:

- WebP
- AVIF if supported and tested
- JPG fallback only if needed

## Icons

Preferred:

- SVG

## Logos

Preferred:

- SVG
- PNG only if SVG unavailable

## Backgrounds

Preferred:

- SVG for patterns
- CSS gradients
- WebP for raster backgrounds

## Documents

Preferred:

- PDF

---

# 15. Performance Guidelines

Assets must support fast loading.

Requirements:

- compress images before production
- avoid huge hero images
- use responsive image sizes
- define width and height to avoid layout shift
- lazy-load below-the-fold images
- avoid video in MVP unless necessary
- keep background animation lightweight

Target guidelines:

| Asset Type | Suggested Max Size |
|---|---:|
| Hero portrait | 250–450 KB if possible |
| Background SVG | < 100 KB |
| Card images | 80–180 KB |
| OG images | 150–300 KB |
| Logos SVG | < 50 KB each |

---

# 16. Current Asset Gaps

Before implementation, collect or create:

## Must Have

- final hero portrait
- about portrait
- personal brand logo / wordmark
- favicon
- trusted organization logos
- 3 case study visuals
- 3 insight visuals
- hero background pattern
- service icons
- homepage OG image

## Should Have

- speaking photo
- contact portrait thumbnail
- footer logo variation
- advisory page OG image
- case studies page OG image
- insights page OG image

## Later

- speaker kit PDF
- executive bio PDF
- AI Strategy Framework PDF
- operating model PDF
- video reel
- AI maturity report template

---

# 17. Asset Creation Prompts

## 17.1 Executive Portrait Prompt

Use this prompt when generating or editing executive portraits from Facundo reference photos:

```text
Create an ultra-realistic executive portrait based on the uploaded reference photos of the same person.

IMPORTANT:
- Preserve the exact facial structure, identity, skin texture, age and natural expression of the person.
- Do NOT beautify excessively.
- Do NOT alter facial proportions.
- Do NOT make the image look AI-generated.
- The final image must look like a real high-end professional corporate photoshoot captured by a premium photographer.

Style direction:
- Executive AI Strategy Consultant
- Premium enterprise advisory aesthetic
- Modern and sophisticated
- Minimal and elegant
- Confident but approachable
- Intelligent and strategic presence

Wardrobe:
- Dark navy blazer or premium black suit
- Minimal modern styling
- No exaggerated fashion elements
- Professional executive appearance

Background:
- Modern dark executive environment
- Subtle premium lighting
- Soft depth of field
- Minimal technology-inspired ambiance
- Sophisticated corporate atmosphere
- Optional subtle AI-inspired lighting accents, but extremely realistic

Lighting:
- Cinematic professional studio lighting
- Natural skin tones
- Soft shadows
- High-end editorial photography style
- Realistic reflections and textures

Camera style:
- Full-frame DSLR look
- 85mm portrait lens aesthetic
- Ultra realistic depth of field
- Natural facial detail
- Sharp eyes
- Professional magazine-quality photography

Expression:
- Calm confidence
- Strategic thinker
- Executive presence
- Authentic and natural

Image quality:
- Hyper realistic
- Photographic
- Premium corporate branding quality
- No artificial skin smoothing
- No uncanny valley effect
- No fake AI artifacts
- No plastic textures

Composition:
- Chest-up portrait
- Looking slightly off-camera
- Strong executive posture
- Clean composition for website hero sections

Color palette:
- Deep navy blue
- Dark charcoal
- Soft electric blue accents or muted orange accents depending on selected UI direction
- Neutral professional tones

Final objective:
Generate a realistic executive portrait suitable for:
- premium consulting website
- AI strategy advisory branding
- enterprise keynote speaker profile
- executive LinkedIn presence
- digital transformation consulting platform
```

---

## 17.2 Case Study Visual Prompt

```text
Create a premium abstract enterprise transformation visual for a case study card.

Style:
- Executive AI Premium
- dark navy and charcoal palette
- subtle data-flow lines
- enterprise architecture feel
- realistic business context without generic stock-photo clichés
- minimal, sophisticated, high-end consulting aesthetic

Do not include:
- readable text
- fake logos
- cartoon elements
- cyberpunk neon overload
- robot or brain clichés

Use case theme:
[INSERT CASE THEME]

Examples:
- banking transformation
- intelligent operating model
- AI adoption readiness
- enterprise decision flow
```

---

## 17.3 Insight Featured Image Prompt

```text
Create a premium editorial abstract visual for an executive insight article.

Style:
- modern AI strategy publication
- executive consulting aesthetic
- deep navy, light gray, subtle accent color
- clean abstract data patterns
- intelligent and minimal
- suitable for a thought leadership article

Do not include:
- text
- cartoon characters
- fake dashboards
- robots
- obvious AI clichés

Article theme:
[INSERT ARTICLE THEME]
```

---

# 18. Development Notes for Claude Code

When implementing the website:

- Use this asset inventory to create placeholder paths.
- Do not invent random asset names.
- If an asset is missing, create a clear placeholder path and list it as missing.
- Do not use external image URLs in production unless explicitly approved.
- Keep assets organized under `/public/assets/`.
- Use optimized formats.
- Use alt text for meaningful images.

Recommended placeholder convention:

```text
/public/assets/portraits/facundo-hero-executive.webp
/public/assets/case-studies/case-banking-transformation.webp
/public/assets/insights/insight-ai-does-not-transform.webp
```

---

# 19. Asset QA Checklist

Before launch, validate:

- Are all visible images optimized?
- Do portraits look realistic and professional?
- Do assets match Executive AI Premium direction?
- Are logos visually balanced and legally safe to use?
- Are all image paths correct?
- Are all images using alt text?
- Are OG images configured?
- Is the favicon visible and legible?
- Are missing assets documented?
- Are no heavy videos or animations slowing down the homepage?

---

# 20. Next Step

After this asset inventory is approved, update `DEVELOPMENT_PROMPT.md` to include:

```text
- strategy/ASSET_INVENTORY.md
```

Then use Claude Code to begin:

```text
Phase 1 — Project Setup
```

