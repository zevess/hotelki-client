import React from 'react'
import { Avatar, AvatarImage } from '~/components/ui/avatar'
import SignOutIcon from '../../../components/icons/SignOut.svg?react'
import { cn } from '~/lib/utils'
import { LinkItem } from './ui/LinkItem'
import { useNavigationItems } from '../model/hooks/useNavigationItems'

import { authService } from '~/entities/auth/auth.service'
import { useNavigate } from 'react-router'
import { useMutation } from '@tanstack/react-query'
import type { IUser } from '~/entities/user/user.types'
import { useAuthStore } from '~/lib/store/authStore'


interface Props {
    className?: string,
    user: IUser | null,
    name: string,
    avatar: string
}

export const AppSidebar: React.FC<Props> = ({ className, user, name, avatar }) => {

    const items = useNavigationItems(user?.id);
    const navigate = useNavigate()


    const { mutate: logout } = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(),
        onSuccess: () => navigate('/auth')
    })

    return (
        <div className={'hidden md:flex md:flex-col max-h-[736px] min-w-[287px] max-w-[287px] bg-white rounded-xl p-3 mr-[50px]'}>
            <div className='flex justify-between items-center mb-4'>
                <span className='font-inter font-semibold text-base'>{name}</span>
                <Avatar>
                    <AvatarImage src={avatar} />
                    {/* <AvatarImage src='https://github.com/zevess.png' /> */}
                </Avatar>
            </div>
            <div className='flex flex-col h-full justify-between '>
                <div className='gap-5'>
                    {items.map((item, index) =>
                        <LinkItem key={index} item={item} />
                    )}
                </div>
                <a onClick={() => logout()} className='flex flex-row p-1 gap-4 min-h-8 transition duration-200 cursor-pointer hover:bg-gray-100 rounded-xl '>
                    <SignOutIcon className='text-[#EF4444]' />
                    <span className='text-xs sm:text-sm md:text-base font-semibold text-[#EF4444] px-4'>Выйти из профиля</span>
                </a>
            </div>
        </div>
    )
}

