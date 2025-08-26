import { z } from 'zod'

export const userSchema = z.object({
    name: z.string().min(2, "Имя пользователя слишком короткое").optional(),
    username: z.string().min(2, "Ник пользователя слишком короткий").optional(),
    email: z.string().email('Некорректный email').optional().or(z.literal('')),
    password: z.string().min(6, 'Пароль слишком короткий').optional(),
})

export const updateUserSchema = z.object({
    name: z.string().min(2, "Имя пользователя слишком короткое"),
    username: z.string().min(2, "Ник пользователя слишком короткий").regex(/^[a-zA-Z0-9._]+$/, {message: "Только латиница, цифры и подчеркивания"}).refine(s=> !s.includes(' '), {message: "Пробелы не допускаются"}),
})

export type UserSchema = z.infer<typeof userSchema>
export type UpdateUserSchema = z.infer<typeof updateUserSchema>