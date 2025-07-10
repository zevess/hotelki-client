import { z } from 'zod'

export const wishSchema = z.object({
    title: z.string().min(2, "Название слишком короткое"),
    eventId: z.string().optional().or(z.literal('')).nullable(),
    link: z.string().optional().or(z.literal('')).nullable(),
    price: z.number(),
    emoji: z.string(),
    priority: z.enum(["LOW", "MEDIUM", "HIGH", "DREAM"])
})

export type WishSchema = z.infer<typeof wishSchema> 