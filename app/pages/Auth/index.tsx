import React from 'react'
import { Login } from '~/components/shared/Auth/Login'
import { Register } from '~/components/shared/Auth/Register'
import { CustomButton } from '~/components/shared/CustomButton'
import { Input } from '~/components/ui/input'
import { cn } from '~/lib/utils'

interface Props {
    className?: string
}

export const AuthPage: React.FC<Props> = ({ className }) => {
    const [isRegister, setIsRegister] = React.useState(false)

    return (
        <div className='flex-1 flex justify-center items-center'>
            <div className={cn('w-[520px] bg-white p-6 rounded-[20px] gap-5 flex flex-col justify-center items-center ', className)}>
                {isRegister ?
                    <>
                        <span className='font-open-sans font-bold text-xl'>Регистрация</span>
                        <Input />
                        <Input />
                        <Input />
                        <CustomButton variant='purple'>Зарегистрироваться</CustomButton>
                        <CustomButton onClick={() => setIsRegister(false)} variant='purpleBorderless'>Вход</CustomButton>
                    </> :

                    <>
                        <span className='font-open-sans font-bold text-xl'>Вход</span>
                        <Input />
                        <Input />
                        <CustomButton variant='purple'>Войти</CustomButton>
                        <CustomButton onClick={() => setIsRegister(true)} variant='purpleBorderless'>Регистрация</CustomButton>
                    </>

                }

            </div>
        </div>

    )
}
