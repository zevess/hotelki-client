import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { CustomButton } from '~/components/custom-button'
import { Input } from '~/components/ui/input'
import { loginSchema, type LoginSchema } from '~/entities/auth/auth.schema'
import { authService } from '~/entities/auth/auth.service'
import { useAuth } from '~/hooks/useAuth'


interface Props {
    className?: string,
    setIsRegister: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoginForm: React.FC<Props> = ({ className, setIsRegister }) => {

    const { auth, isAuthLoading } = useAuth(false)

    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema)
    })

    const onSubmit: SubmitHandler<LoginSchema> = (data) => {
        // console.log(data);
        auth(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-2.5'>
                <Input {...register('email')} placeholder='Email' />
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                <Input {...register('password')} placeholder='Пароль' />
                {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
            </div>
            <div className='flex flex-col gap-5 mt-5'>
                <CustomButton type='submit' variant='purple'>Вход</CustomButton>
                <CustomButton className='mx-auto ' onClick={() => setIsRegister(true)} variant='purpleBorderless'>Регистрация</CustomButton>
            </div>
        </form>
    )
}
