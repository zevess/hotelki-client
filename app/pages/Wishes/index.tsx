import React from 'react'
import { CustomButton } from '~/components/custom-button'
import { Title } from '~/components/title'

import { cn } from '~/lib/utils'

import { useGetWishes } from '~/hooks/queries/wish/useGetWishes'
import { CreateButton } from '~/components/create-button'
import { useProfile } from '~/hooks/useProfile'
import { WishItem } from '~/features/wish/ui/wish-item'
import { PUBLIC_URL } from '~/lib/config/url.config'
import { useAuthStore } from '~/lib/store/authStore'
import { useGetUserProfile } from '~/hooks/queries/user/useGetUserProfile'
import type { IUser } from '~/entities/user/user.types'


interface Props {
    className?: string,
    title: string,
    // userId: string,
    userData: IUser,
}

export const WishesPage: React.FC<Props> = ({ className, title, userData }) => {

    const { wishes } = useGetWishes(userData.id)
    console.log(wishes)

    const { setCurrentUser } = useAuthStore()

    React.useEffect(() => {
        setCurrentUser(userData)
    }, [])

    return (
        <div className={cn('flex flex-col', className)}>
            <div className='flex items-center'>
                <Title text={title || 'Все хотелки'} />
                <CreateButton href={PUBLIC_URL.wishesCreate()} variant='purpleOutline' />
            </div>
            <div className='flex flex-col justify-center mt-3 gap-4 sm:flex-wrap sm:flex-row sm:justify-around md:justify-normal'>
                {wishes && wishes.map((item, index) => (
                    <WishItem key={index} wishData={item} eventSlug={item.event && item.event.slug} eventTitle={item.event && item.event.title} />
                ))}
            </div>
        </div>

    )
}
