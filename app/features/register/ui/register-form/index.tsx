import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { CustomButton } from '~/shared/ui/custom-button'
import { Spinner } from '~/shared/ui/spinner'
import { useAuth } from '~/entities/auth/api/useAuth'
import { Input } from '~/shared/ui/shadcn/input'
import { registerSchema, type RegisterSchema } from '~/entities/auth/model/auth.schema'


interface Props {
    className?: string,
    setAuthType: React.Dispatch<React.SetStateAction<"register" | "login" | "verify">>
}

export const RegisterForm: React.FC<Props> = ({ className, setAuthType }) => {

    const { auth, isAuthLoading, authError, isSuccess, createdUser } = useAuth(true)

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema)
    })

    const onSubmit: SubmitHandler<RegisterSchema> = (data) => {
        auth(data);
    }

    if(isSuccess){
        return (
            <p>{createdUser?.data?.message}</p>
        )
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
                <CustomButton disabled={isAuthLoading} className='' onClick={() => setAuthType("login")} variant='purpleBorderless'>Вход</CustomButton>
                {(authError?.message == "Network Error") && <span className='text-center font-semibold'>Ошибка при соединении с сервером.<br />Повторите попытку позже</span>}
            </div>
        </form>
    )
}
