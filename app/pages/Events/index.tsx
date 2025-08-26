import React from 'react'
import { CreateButton } from '~/shared/ui/create-button'
import { Title } from '~/shared/ui/title'
import type { IUser } from '~/entities/user/model/user.types'
import { EventItem } from '~/entities/event/ui/event-item'
import { WishItem } from '~/entities/wish/ui/wish-item'
import { useGetEventBySlug } from '~/entities/event/api/useGetEventBySlug'
import { useGetUserEvents } from '~/entities/event/api/useGetUserEvents'
import { useAuthStore } from '~/shared/store/authStore'
import { cn } from '~/shared/lib/utils'
import { PUBLIC_URL } from '~/shared/config/url.config'


interface Props {
    className?: string,
    userData: IUser,
    userId?: string,
    slug?: string,
}

export const EventsPage: React.FC<Props> = ({ className, slug, userData, userId }) => {

    const { setCurrentUser, user } = useAuthStore()
    const { events } = useGetUserEvents(userData.id)
    const { wishesByEventSlug, isLoading } = useGetEventBySlug(userData.id, slug)
    console.log(wishesByEventSlug)

    const isSameUser = user?.id === userData.id

    React.useEffect(() => {
        setCurrentUser(userData)
    }, [])

    return (
        <div className={cn('flex flex-col w-full', className)}>
            <div className='flex items-center'>
                <Title text={slug ? wishesByEventSlug?.title : "События"} />
                {isSameUser && <CreateButton href={slug ? PUBLIC_URL.wishesCreate() : PUBLIC_URL.eventCreate()} variant='purpleOutline' />}

            </div>
            <div className='flex flex-col justify-center mt-3 gap-4 sm:flex-wrap sm:flex-row sm:justify-normal'>

                {events?.length == 0 && <span className='font-inter text-xl font-semibold text-center mx-auto mt-6'>Тут еще нет событий🙁</span>}

                {(wishesByEventSlug && wishesByEventSlug?.wish.length == 0) && <span className='font-inter text-xl font-semibold text-center mx-auto mt-6'>Тут еще нет хотелок🙁</span>}

                {!slug && events?.map((item, index) => (
                    <EventItem key={index} eventData={item} />
                ))}

                {wishesByEventSlug && wishesByEventSlug?.wish.map((item, index) => (
                    <WishItem username={wishesByEventSlug.user.username} key={index} wishData={item} eventSlug={wishesByEventSlug.slug} eventTitle={wishesByEventSlug.title} />
                ))}

            </div>
        </div>
    )
}
