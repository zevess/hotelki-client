import React from 'react'
import { Input } from '~/components/ui/input'
import { cn } from '~/lib/utils'
import { CustomButton } from '../../CustomButton'

interface Props {
    className?: string,
    onClickChange: React.Dispatch<React.SetStateAction<boolean>>,
}

export const Login: React.FC<Props> = ({ className, onClickChange }) => {
    return (
        <div className={cn('w-[520px] bg-white p-6 rounded-[20px] gap-5 flex flex-col justify-center items-center ', className)}>
            <span className='font-open-sans font-bold text-xl'>Вход</span>
            <Input />
            <Input />
            <CustomButton variant='purple'>Войти</CustomButton>
            <CustomButton onClick={() => onClickChange}  variant='purpleBorderless'>Регистрация</CustomButton>
        </div>
    )
}
