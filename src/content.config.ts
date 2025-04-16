import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(), // 👈 make sure this is a z.date() not z.string()
		heroImage: z.string().optional()
	})
});

export const collections = {
	blog
};