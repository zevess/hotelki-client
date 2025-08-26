import React from 'react'
import { useNavigationItems } from '../model/hooks/useNavigationItems'
import { useAuthStore } from '~/shared/store/authStore'
import { SignOutButton } from '~/shared/ui/sign-out-button'
import { LinkItem } from './ui/link-item'
import { UserAvatar } from '~/entities/user/ui/user-avatar'



interface Props {
    className?: string,
}

export const AppSidebar: React.FC<Props> = ({ className }) => {

    const { setCurrentUser, currentUser, user } = useAuthStore()
    const items = useNavigationItems(currentUser?.username, Boolean(user?.username), Boolean(user?.id !== currentUser?.id));

    return (
        <div className={'hidden md:flex md:flex-col max-h-[736px] min-w-[287px] max-w-[287px] bg-white rounded-xl p-3 mr-[50px]'}>
            <div className='flex justify-between items-center mb-4'>
                <span className='font-inter font-semibold text-base'>{currentUser?.name}</span>
                <UserAvatar className='size-8' src={currentUser?.avatar} />
            </div>
            <div className='flex flex-col h-full justify-between '>
                <div className='gap-5'>
                    {items.map((item, index) =>
                        <LinkItem isVisible={item.isVisible} key={index} item={item} />
                    )}
                </div>
                <SignOutButton />
            </div>
        </div>
    )
}

