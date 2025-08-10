import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router'
import { CustomButton } from '~/shared/ui/custom-button'

import { useAuth } from '~/entities/auth/api/useAuth'
import { Input } from '~/shared/ui/shadcn/input'
import { PUBLIC_URL } from '~/shared/config/url.config'
import { Spinner } from '~/shared/ui/spinner'
import { loginSchema, type LoginSchema } from '~/entities/auth/model/auth.schema'

interface Props {
    className?: string,
    setAuthType: React.Dispatch<React.SetStateAction<"register" | "login" | "verify">>
}

export const LoginForm: React.FC<Props> = ({ className, setAuthType }) => {

    const { auth, isAuthLoading, authError } = useAuth(false)

    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema)
    })

    const onSubmit: SubmitHandler<LoginSchema> = (data) => {
        auth(data);
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-2.5'>
                <Input {...register('email')} placeholder='Email' />
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                <Link to={PUBLIC_URL.passwordRecovery()} className='text-[#C084FC] w-fit hover:underline'>Забыли пароль?</Link>
                <Input {...register('password')} type='password' placeholder='Пароль' />
                {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
            </div>
            <div className='flex flex-col gap-5 mt-5'>
                <CustomButton disabled={isAuthLoading} type='submit' variant='purple'>
                    {isAuthLoading && <Spinner className='text-white' />}
                    Вход
                </CustomButton>
                <CustomButton disabled={isAuthLoading} className='' onClick={() => setAuthType("register")} variant='purpleBorderless'>Регистрация</CustomButton>
                {(authError?.message == "Network Error") && <span className='text-center font-semibold'>Ошибка при соединении с сервером.<br />Повторите попытку позже</span>}

            </div>
        </form>
    )
}
