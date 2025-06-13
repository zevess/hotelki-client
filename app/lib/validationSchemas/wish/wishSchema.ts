import {z} from 'zod'

export const wishSchema = z.object({
    title: z.string().min(2, "Название слишком короткое"),
    event: z.string().min(2, "Название события слишком короткое"),
    link: z.string(),
    price: z.number(),
    priority: z.enum(["LOW", "MIDDLE", "HIGH", "DREAM"])
})

export type WishSchema = z.infer<typeof wishSchema> 