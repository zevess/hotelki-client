import { z } from 'zod'

export const resetPasswordSchema = z.object({
    email: z.string().email('Некорректный email'),
})

export const newPasswordSchema = z.object({
    password: z.string().min(6, 'Пароль слишком короткий')
})

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>
export type NewPasswordSchema = z.infer<typeof newPasswordSchema>