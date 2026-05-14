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
    title:            z.string(),
    summary:          z.string(),
    sector:           z.string(),
    environment:      z.string(),
    theme:            z.string(),
    challenge:        z.string(),
    intervention:     z.string(),
    impact:           z.string(),
    strategicProof:   z.string(),
    relatedPractices: z.array(z.string()).default([]),
    tags:             z.array(z.string()).default([]),
    confidentiality:  z.enum(['public', 'anonymized', 'internal']),
    evidenceStatus:   z.enum(['verified', 'qualitative', 'pending-validation']),
    featured:         z.boolean().default(false),
    order:            z.number(),
    seoTitle:         z.string(),
    metaDescription:  z.string(),
    ctaLabel:         z.string(),
    ctaHref:          z.string(),
  }),
});

export const collections = { insights, 'case-studies': caseStudies };
