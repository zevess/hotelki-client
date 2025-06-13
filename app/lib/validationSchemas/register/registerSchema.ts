import {z} from 'zod'

export const registerSchema = z.object({
    name: z.string().min(2, "Имя пользователя слишком короткое"),
    email: z.string().email('Некорректный email'),
    password: z.string().min(6, 'Пароль слишком короткий')
})

export type RegisterSchema = z.infer<typeof registerSchema> 