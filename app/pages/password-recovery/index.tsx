import React from 'react'
import { Container } from '~/shared/ui/container'
import { NewPasswordForm } from '~/features/password/ui/new-password-form'
import { ResetPasswordForm } from '~/features/password/ui/reset-password-form'
import { cn } from '~/shared/lib/utils'
import { Header } from '~/widgets/header'

interface Props {
    className?: string,
    token?: string
}

export const PasswordRecoveryPage: React.FC<Props> = ({ className, token }) => {
    return (
        <Container>
            <Header />
            <div className='flex-1 flex justify-center items-center'>
                <div className={cn('w-[520px] bg-white p-6 rounded-[20px] ', className)}>
                    <div className='w-full flex flex-col gap-5'>

                        <span className='font-open-sans font-bold text-xl mx-auto'>
                            {token ? "Новый пароль" : "Сброс пароля"}
                        </span>

                        <span className='mx-auto'>
                            {token ? "Введите новый пароль" : "Введите свою почту для сброса пароля"}
                        </span>

                        {token ? (
                            <NewPasswordForm token={token} />
                        ) : (
                            <ResetPasswordForm />
                        )}

                    </div>
                </div>
            </div>
        </Container>
    )
}
