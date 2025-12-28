import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const profiles = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/profiles" }),
	schema: z.object({
		name: z.string(),
		lore: z.string(),
		image: z.string().optional().default("chattino.jpeg"),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional(),
		featured: z.boolean().optional().default(false),
		order: z.number().optional().default(0),
		stats: z
			.object({
				level: z.number().optional(),
				type: z.string().optional(),
			})
			.optional(),
	}),
});

export const collections = { profiles };
