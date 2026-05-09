/**
 * Content collections schema — facundogangemi.com
 * Source: DEVELOPMENT_PROMPT.md §8 Content Model
 *
 * Collections:
 * - insights  → transformed Blog (Markdown/MDX with frontmatter)
 * - caseStudies → transformed Projects (Markdown/MDX with frontmatter)
 */

import { defineCollection, z } from 'astro:content';

// ─── Insights ──────────────────────────────────────────────────────────────

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title:          z.string(),
    slug:           z.string().optional(),
    date:           z.coerce.date(),
    language:       z.enum(['en', 'es']).default('en'),
    translationKey: z.string().optional(),
    category:       z.string(),
    tags:           z.array(z.string()).default([]),
    metaDescription: z.string().optional(),
    featuredImage:  z.string().optional(),
    author:         z.string().default('Facundo Gangemi'),
    readingTime:    z.string().optional(),
    featured:       z.boolean().default(false),
    draft:          z.boolean().default(false),
  }),
});

// ─── Case Studies ──────────────────────────────────────────────────────────

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title:          z.string(),
    slug:           z.string().optional(),
    language:       z.enum(['en', 'es']).default('en'),
    translationKey: z.string().optional(),
    industry:       z.string(),
    pillar:         z.string(),
    heroMetric:     z.string(),
    summary:        z.string(),
    featuredImage:  z.string().optional(),
    client:         z.string().default('Enterprise client'),
    duration:       z.string().optional(),
    featured:       z.boolean().default(false),
    draft:          z.boolean().default(false),
    order:          z.number().optional(),
  }),
});

export const collections = { insights, caseStudies };
