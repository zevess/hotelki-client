import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { CustomButton } from '~/shared/ui/custom-button'
import { useNewPassword } from '~/entities/password/api/useNewPassword'
import { Input } from '~/shared/ui/shadcn/input'
import { Spinner } from '~/shared/ui/spinner'
import { newPasswordSchema, type NewPasswordSchema } from '~/entities/password/model/password.schema'


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
                <Input {...register('password')} placeholder='Новый пароль' type='password' />
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
