import {z} from 'zod'

export const eventSchema = z.object({
    title: z.string().min(2, "Название события слишком короткое"),
    date: z.date({message: "Неверный формат даты"})
})

export type EventSchema = z.infer<typeof eventSchema> 