import { defineCollection } from "astro:content";
import { z } from "zod";
import { fetchPocketbaseCollection } from "./lib/pocketbase";

const restaurantId = import.meta.env.pb_restaurant_id as string;

const localizedText = z.record(z.string(), z.string()).default({});

const categories = defineCollection({
  loader: async () => fetchPocketbaseCollection("categories", restaurantId),
  schema: z.object({
    name: localizedText,
    position: z.number().default(0),
    restaurant: z.string(),
  }),
});

const products = defineCollection({
  loader: async () => fetchPocketbaseCollection("products", restaurantId),
  schema: z.object({
    name: localizedText,
    description: localizedText,
    alt: localizedText,
    price: z.number(),
    category: z.string(),
    restaurant: z.string(),
    image: z.string().default(""),
    available: z.boolean().default(true),
    allergens: z.array(z.string()).default([]),
    position: z.number().default(0),
    collectionId: z.string(),
  }),
});

export const collections = { categories, products };
