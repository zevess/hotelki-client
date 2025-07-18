import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { CustomButton } from '~/components/custom-button'
import { Input } from '~/components/ui/input'
import { Spinner } from '~/components/ui/spinner'
import { registerSchema, type RegisterSchema } from '~/entities/auth/auth.schema'
import { authService } from '~/entities/auth/auth.service'
import { useAuth } from '~/hooks/useAuth'


interface Props {
    className?: string,
    setIsRegister: React.Dispatch<React.SetStateAction<boolean>>

}

export const RegisterForm: React.FC<Props> = ({ className, setIsRegister }) => {

    const { auth, isAuthLoading, authError } = useAuth(true)

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema)
    })

    const onSubmit: SubmitHandler<RegisterSchema> = (data) => {
        auth(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-2.5'>
                <Input {...register('name')} placeholder='Имя' />
                {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                <Input {...register('email')} placeholder='Email' />
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                <Input {...register('password')} placeholder='Пароль' />
                {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
            </div>
            <div className='flex flex-col gap-5 mt-5'>
                <CustomButton disabled={isAuthLoading} type='submit' variant='purple'>
                    {isAuthLoading && <Spinner className='text-white' />}
                    Зарегистрироваться
                </CustomButton>
                <CustomButton disabled={isAuthLoading} className='' onClick={() => setIsRegister(false)} variant='purpleBorderless'>Вход</CustomButton>
                {(authError?.message == "Network Error") && <span className='text-center font-semibold'>Ошибка при соединении с сервером.<br />Повторите попытку позже</span>}
            </div>
        </form>
    )
}
