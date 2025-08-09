import React from 'react'
import { LoginForm } from '~/features/auth/login/ui/login-form'
import { RegisterForm } from '~/features/auth/register/ui/register-form'
import { cn } from '~/lib/utils'
import { redirect, useNavigate } from 'react-router'
import { useProfile } from '~/hooks/auth/useProfile'
import { Container } from '~/components/container'
import { Header } from '~/widgets/header/ui'
import { Spinner } from '~/components/ui/spinner'
import { useVerification } from '~/hooks/verification/useVerification'
import { PUBLIC_URL } from '~/lib/config/url.config'

interface Props {
    className?: string,
    token?: string
}

export const AuthPage: React.FC<Props> = ({ className, token }) => {
    const [authType, setAuthType] = React.useState<"register" | "login" | "verify">(token ? "verify" : "login")

    const navigate = useNavigate();
    const { user } = useProfile()

    const { verify, isVerifying } = useVerification()

    

    React.useEffect(() => {

        if (token && !isVerifying) {
            verify(token)
        }

    }, [token])


    return (
        <Container>
            <Header />
            <div className='flex-1 flex justify-center items-center'>
                <div className={cn('w-[520px] bg-white p-6 rounded-[20px] ', className)}>
                    <div className='w-full flex flex-col gap-5'>

                        <span className='font-open-sans font-bold text-xl mx-auto'>
                            {authType == 'register' && "Регистрация"}
                            {authType == 'login' && "Вход"}
                            {authType == 'verify' && "Подтверждение"}
                        </span>

                        {(authType == 'verify' && isVerifying) && <Spinner />}
                        {authType == 'login' && <LoginForm setAuthType={setAuthType} />}
                        {authType == 'register' && <RegisterForm setAuthType={setAuthType} />}
                    </div>
                </div>
            </div>
        </Container>


    )
}
