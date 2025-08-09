import React from 'react'
import { Avatar, AvatarImage } from '~/components/ui/avatar'
import { useNavigationItems } from '../model/hooks/useNavigationItems'
import { useAuthStore } from '~/lib/store/authStore'
import { SignOutButton } from '~/components/sign-out-button'
import { LinkItem } from './ui/link-item'


interface Props {
    className?: string,
}

export const AppSidebar: React.FC<Props> = ({ className }) => {

    const { setCurrentUser, currentUser, user } = useAuthStore()
    const items = useNavigationItems(currentUser?.id, Boolean(user?.id));

    return (
        <div className={'hidden md:flex md:flex-col max-h-[736px] min-w-[287px] max-w-[287px] bg-white rounded-xl p-3 mr-[50px]'}>
            <div className='flex justify-between items-center mb-4'>
                <span className='font-inter font-semibold text-base'>{currentUser?.name}</span>
                <Avatar>
                    <AvatarImage src={currentUser?.avatar} />
                </Avatar>
            </div>
            <div className='flex flex-col h-full justify-between '>
                <div className='gap-5'>
                    {items.map((item, index) =>
                        <LinkItem key={index} item={item} />
                    )}
                </div>
                <SignOutButton />


            </div>
        </div>
    )
}

