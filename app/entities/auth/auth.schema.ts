import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string().email('Некорректный email'),
    password: z.string().min(6, 'Пароль слишком короткий')
})

export const registerSchema = z.object({
    name: z.string().min(2, "Имя пользователя слишком короткое"),
    email: z.string().email('Некорректный email'),
    password: z.string().min(6, 'Пароль слишком короткий')
})

export const resetPasswordSchema = z.object({
    email: z.string().email('Некорректный email'),
})

export const newPasswordSchema = z.object({
    password: z.string().min(6, 'Пароль слишком короткий')
})

export type RegisterSchema = z.infer<typeof registerSchema>
export type LoginSchema = z.infer<typeof loginSchema> 
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>
export type NewPasswordSchema = z.infer<typeof newPasswordSchema>
