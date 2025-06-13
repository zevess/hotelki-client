import {z} from 'zod'

const loginSchema = z.object({
    email: z.string().email('Некорректный email'),
    password: z.string().min(6, 'Пароль слишком короткий')
})

export type LoginSchema = z.infer<typeof loginSchema> 