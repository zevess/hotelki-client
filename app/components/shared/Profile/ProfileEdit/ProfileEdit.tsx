import React from 'react'
import { Avatar, AvatarImage } from '~/components/ui/avatar'
import { cn } from '~/lib/utils'
import { CustomButton } from '../../CustomButton'

interface Props {
    className?: string
}

export const ProfileEdit: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn(
            'flex flex-col w-full max-h-[736px] bg-white max-w-[863px] rounded-[20px] p-6',
            className
        )}>
            <div>
                <span>Фотография</span>
                <div className='flex items-center'>
                    <Avatar>
                        <AvatarImage src='https://github.com/zevess.png ' />
                    </Avatar>
                    <CustomButton variant='purple'>Сменить фото</CustomButton>
                    <CustomButton variant='redOutline'>Удалить фото</CustomButton>
                </div>
            </div>
        </div>
    )
}
