/**
 * Content collections schema — facundogangemi.com
 */

import { defineCollection, z } from 'astro:content';

// ─── Insights ──────────────────────────────────────────────────────────────

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title:           z.string(),
    description:     z.string(),
    pubDate:         z.coerce.date(),
    category:        z.string(),
    categorySlug:    z.string(),
    tags:            z.array(z.string()).default([]),
    featured:        z.boolean().default(false),
    draft:           z.boolean().default(false),
    image:           z.string().optional(),
    imageAlt:        z.string().optional(),
    linkedinSummary: z.string().optional(),
    author:          z.string().default('Facundo Gangemi'),
    language:        z.enum(['en', 'es']).default('en'),
  }),
});

// ─── Case Studies ──────────────────────────────────────────────────────────

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title:        z.string(),
    language:     z.enum(['en', 'es']).default('en'),
    industry:     z.string(),
    pillar:       z.string(),
    heroMetric:   z.string(),
    summary:      z.string(),
    featuredImage: z.string().optional(),
    client:       z.string().default('Enterprise client'),
    duration:     z.string().optional(),
    featured:     z.boolean().default(false),
    draft:        z.boolean().default(false),
    order:        z.number().optional(),
  }),
});

export const collections = { insights, caseStudies };
