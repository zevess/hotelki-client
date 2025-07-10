import { z } from 'zod'

export const eventSchema = z.object({
    title: z.string().min(2, "Название события слишком короткое"),
    emoji: z.string(),
    date: z.string().date()
})

export type EventSchema = z.infer<typeof eventSchema> 