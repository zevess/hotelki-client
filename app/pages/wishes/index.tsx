import React from 'react'
import { Title } from '~/shared/ui/title'
import { cn } from '~/shared/lib/utils'
import { CreateButton } from '~/shared/ui/create-button'
import { WishItem } from '~/entities/wish/ui/wish-item'
import { useAuthStore } from '~/shared/store/authStore'
import type { IUser } from '~/entities/user/model/user.types'
import { useGetWishes } from '~/entities/wish/api/useGetWishes'
import { PUBLIC_URL } from '~/shared/config/url.config'


interface Props {
    className?: string,
    title: string,
    userData: IUser,

}

export const WishesPage: React.FC<Props> = ({ className, title, userData }) => {

    const { setCurrentUser, user } = useAuthStore()

    const { wishes } = useGetWishes(userData.id)

    React.useEffect(() => {
        setCurrentUser(userData)
    }, [])

    const isSameUser = user?.id === userData.id


    return (
        <div className={cn('flex flex-col', className)}>
            <div className='flex items-center'>
                <Title text={title || 'Все хотелки'} />
                {isSameUser && <CreateButton href={PUBLIC_URL.wishesCreate()} variant='purpleOutline' />}

            </div>
            <div className='flex flex-col justify-center mt-3 gap-4 sm:flex-wrap sm:flex-row sm:justify-around md:justify-normal'>
                {wishes?.length == 0 && <span className='font-inter text-xl font-semibold text-center mx-auto mt-6'>Тут еще нет хотелок🙁</span>}
                {wishes && wishes.map((item, index) => (
                    <WishItem username={userData.username} key={index} wishData={item} eventSlug={item.event && item.event.slug} eventTitle={item.event && item.event.title} />
                ))}
            </div>
        </div>
    )
}
