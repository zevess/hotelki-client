import React from 'react'
import { Avatar, AvatarImage } from '~/components/ui/avatar'
import { cn } from '~/lib/utils'

import { Input } from '~/components/ui/input'
import { CustomButton } from '~/components/shared/CustomButton'

interface Props {
    className?: string
}

export const ProfileEditPage: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn(
            'flex flex-col w-full h-full max-h-[736px] bg-white max-w-[863px] rounded-[20px] p-6',
            className
        )}>
            <div className='flex flex-col'>
                <span className='font-inter text-base'>Фотография</span>
                <div className='flex items-center h-14 gap-5 mt-3'>
                    <Avatar className='w-[56px] h-[56px]'>
                        <AvatarImage src='https://github.com/zevess.png ' />
                    </Avatar>
                    <CustomButton variant='purple'>Сменить фото</CustomButton>
                    <CustomButton variant='redOutline'>Удалить фото</CustomButton>
                </div>

                <div className='flex flex-col '>
                    <Input className='h-12 my-5'  placeholder='Имя'/>
                    <Input className='h-12' placeholder='Email'/>
                    <CustomButton className='ml-auto my-5' variant='purple'>Сохранить</CustomButton>
                </div>
            </div>
        </div>
    )
}
