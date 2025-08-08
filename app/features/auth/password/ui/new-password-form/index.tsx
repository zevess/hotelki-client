import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { CustomButton } from '~/components/custom-button'
import { Input } from '~/components/ui/input'
import { Spinner } from '~/components/ui/spinner'
import { newPasswordSchema, type NewPasswordSchema } from '~/entities/auth/auth.schema'
import { useNewPassword } from '~/hooks/password/useNewPassword'


interface Props {
    className?: string,
    token: string
}

export const NewPasswordForm: React.FC<Props> = ({ className, token }) => {


    const { setNewPassword, isNewPasswordSetting, newPasswordError } = useNewPassword()

    const { register, handleSubmit, formState: { errors } } = useForm<NewPasswordSchema>({
        resolver: zodResolver(newPasswordSchema)
    })

    const onSubmit: SubmitHandler<NewPasswordSchema> = (data) => {
        const newPasswordData = {
            password: data.password,
            token: token
        }
        setNewPassword(newPasswordData)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-2.5'>
                <Input {...register('password')} placeholder='Новый пароль' />
                {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
            </div>
            <div className='flex flex-col gap-5 mt-5'>
                <CustomButton disabled={isNewPasswordSetting} type='submit' variant='purple'>
                    {isNewPasswordSetting && <Spinner className='text-white' />}
                    Подтвердить новый пароль
                </CustomButton>
            </div>
        </form>
    )
}
