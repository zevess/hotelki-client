import React from 'react'
import { CustomButton } from '~/components/custom-button'
import { LoginForm } from '~/features/auth/login/ui/login-form'
import { RegisterForm } from '~/features/auth/register/ui/register-form'
import { Input } from '~/components/ui/input'
import { cn } from '~/lib/utils'

import { useNavigate } from 'react-router'
import { useProfile } from '~/hooks/useProfile'
import { useAuthStore } from '~/lib/store/authStore'
import { Container } from '~/components/container'
import { Header } from '~/widgets/header/ui'

interface Props {
    className?: string
}

export const AuthPage: React.FC<Props> = ({ className }) => {
    const [isRegister, setIsRegister] = React.useState(false)

    const navigate = useNavigate();

    // const { user } = useProfile()
    // const { user } = useAuthStore()

    // React.useEffect(() => {
    //     if (user) {
    //         navigate(`/profile/${user.id}`);
    //     }
    // }, [])


    return (
        <Container>
            <Header/>
            <div className='flex-1 flex justify-center items-center'>
                <div className={cn('w-[520px] bg-white p-6 rounded-[20px] ', className)}>
                    <div className='w-full flex flex-col gap-5'>
                        <span className='font-open-sans font-bold text-xl mx-auto'>{isRegister ? "Регистрация" : "Вход"}</span>
                        {isRegister ? <RegisterForm setIsRegister={setIsRegister} /> : <LoginForm setIsRegister={setIsRegister} />}
                    </div>
                </div>
            </div>
        </Container>


    )
}
