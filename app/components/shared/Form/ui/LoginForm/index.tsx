import React from 'react'
import { CustomButton } from '~/components/shared/CustomButton'
import { Input } from '~/components/ui/input'

interface Props {
    className?: string,
    setIsRegister: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoginForm: React.FC<Props> = ({ className, setIsRegister }) => {
    return (
        <div className={className}>
            <div className='flex flex-col gap-2.5'>
                <Input placeholder='Email' />
                <Input placeholder='Пароль' />
            </div>
            <div className='flex flex-col gap-5 mt-5'>
                <CustomButton variant='purple'>Вход</CustomButton>
                <CustomButton className='mx-auto ' onClick={() => setIsRegister(true)} variant='purpleBorderless'>Регистрация</CustomButton>
            </div>
        </div>
    )
}
