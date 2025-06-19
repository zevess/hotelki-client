import React from 'react'
import { Login } from '~/components/shared/Auth/Login'
import { Register } from '~/components/shared/Auth/Register'
import { CustomButton } from '~/components/shared/CustomButton'
import { LoginForm } from '~/features/auth/login/ui/LoginForm'
import { RegisterForm } from '~/features/auth/register/ui/RegisterForm'
import { Input } from '~/components/ui/input'
import { cn } from '~/lib/utils'

interface Props {
    className?: string
}

export const AuthPage: React.FC<Props> = ({ className }) => {
    const [isRegister, setIsRegister] = React.useState(false)

    return (
        <div className='flex-1 flex justify-center items-center'>
            <div className={cn('w-[520px] bg-white p-6 rounded-[20px] ', className)}>
                <div className='w-full flex flex-col gap-5'>
                    <span className='font-open-sans font-bold text-xl mx-auto'>{isRegister ? "Регистрация" : "Вход"}</span>
                    {isRegister ? <RegisterForm setIsRegister={setIsRegister} /> : <LoginForm setIsRegister={setIsRegister} />}
                </div>
            </div>
        </div>

    )
}
