import { z } from 'zod'

export const userSchema = z.object({
    name: z.string().min(2, "Имя пользователя слишком короткое").optional(),
    email: z.string().email('Некорректный email').optional().or(z.literal('')),
    password: z.string().min(6, 'Пароль слишком короткий').optional()
})

export type UserSchema = z.infer<typeof userSchema>
