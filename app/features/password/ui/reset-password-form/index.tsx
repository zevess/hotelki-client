import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { CustomButton } from '~/shared/ui/custom-button'
import { Spinner } from '~/shared/ui/spinner'
import { useResetPassword } from '~/entities/password/api/useResetPassword'
import { Input } from '~/shared/ui/shadcn/input'
import { resetPasswordSchema, type ResetPasswordSchema } from '~/entities/password/model/password.schema'

interface Props {
    className?: string,

}

export const ResetPasswordForm: React.FC<Props> = ({ className }) => {

    const { resetPassword, resetPasswordError, isPasswordReseting } = useResetPassword()

    const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordSchema>({
        resolver: zodResolver(resetPasswordSchema)
    })

    const onSubmit: SubmitHandler<ResetPasswordSchema> = (data) => {
        resetPassword(data.email)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-2.5'>
                <Input {...register('email')} placeholder='Email' />
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
            </div>
            <div className='flex flex-col gap-5 mt-5'>
                <CustomButton disabled={isPasswordReseting} type='submit' variant='purple'>
                    {isPasswordReseting && <Spinner className='text-white' />}
                    Сбросить пароль
                </CustomButton>
   
            </div>
        </form>
    )
}
