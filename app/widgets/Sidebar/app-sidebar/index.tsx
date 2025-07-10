import React from 'react'
import { Avatar, AvatarImage } from '~/components/ui/avatar'
import SignOutIcon from '../../../components/icons/SignOut.svg?react'
import { cn } from '~/lib/utils'
import { LinkItem } from './ui/link-item'
import { useNavigationItems } from '../model/hooks/useNavigationItems'

import { authService } from '~/entities/auth/auth.service'
import { useNavigate, useParams } from 'react-router'
import { useMutation } from '@tanstack/react-query'
import type { IUser } from '~/entities/user/user.types'
import { useAuthStore } from '~/lib/store/authStore'
import { PUBLIC_URL } from '~/lib/config/url.config'
import { useGetUserProfile } from '~/hooks/queries/user/useGetUserProfile'


interface Props {
    className?: string,
}

export const AppSidebar: React.FC<Props> = ({ className }) => {

    const navigate = useNavigate()
    // const params = useParams()

    const { setCurrentUser, currentUser, user } = useAuthStore()

    // const { userProfile } = useGetUserProfile(params.userId !== undefined ? params.userId : "")

    // React.useEffect(() => {
    //     userProfile && setCurrentUser(userProfile)
    // }, [])

    // console.log(userProfile)

    const { mutate: logout } = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout().then(() => useAuthStore.persist.clearStorage()),
        onSuccess: () => navigate(PUBLIC_URL.auth())
    })

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
                <a onClick={() => {
                    logout()
                }} className='flex flex-row p-1 gap-4 min-h-8 transition duration-200 cursor-pointer hover:bg-gray-100 rounded-xl '>
                    <SignOutIcon className='text-[#EF4444]' />
                    <span className='text-xs sm:text-sm md:text-base font-semibold text-[#EF4444] px-4'>Выйти из профиля</span>
                </a>
            </div>
        </div>
    )
}

