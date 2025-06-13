import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { CustomButton } from '~/components/shared/CustomButton'
import { Input } from '~/components/ui/input'
import { registerSchema, type RegisterSchema } from '~/lib/validationSchemas/register/registerSchema'

interface Props {
    className?: string,
    setIsRegister: React.Dispatch<React.SetStateAction<boolean>>

}

export const RegisterForm: React.FC<Props> = ({ className, setIsRegister }) => {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema)
    })

    const onSubmit: SubmitHandler<RegisterSchema> = (data) => {
        console.log(data);
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
                <CustomButton type='submit' variant='purple'>Зарегистрироваться</CustomButton>
                <CustomButton className='mx-auto ' onClick={() => setIsRegister(false)} variant='purpleBorderless'>Вход</CustomButton>
            </div>
        </form>
    )
}
