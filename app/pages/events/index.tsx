import React from 'react'
import { CreateButton } from '~/components/create-button'
import { Title } from '~/components/title'
import type { IUser } from '~/entities/user/user.types'
import { EventItem } from '~/features/event/ui/event-item'
import { WishItem } from '~/features/wish/ui/wish-item'
import { useGetEventBySlug } from '~/hooks/queries/event/useGetEventBySlug'
import { useGetUserEvents } from '~/hooks/queries/event/useGetUserEvents'
import { PUBLIC_URL } from '~/lib/config/url.config'
import { useAuthStore } from '~/lib/store/authStore'
import { cn } from '~/lib/utils'


interface Props {
    className?: string,
    userData: IUser,
    userId: string,
    slug?: string,
}

export const EventsPage: React.FC<Props> = ({ className, slug, userData, userId }) => {

    const { setCurrentUser } = useAuthStore()
    const { events } = useGetUserEvents(userId)
    const { wishesByEventSlug, isLoading } = useGetEventBySlug(userData.id, slug)

    React.useEffect(() => {
        setCurrentUser(userData)
    }, [])

    console.log(wishesByEventSlug)
    
    return (
        <div className={cn('flex flex-col w-full', className)}>
            <div className='flex items-center'>
                <Title text={slug ? wishesByEventSlug?.title : "События"} />
                <CreateButton href={slug ? PUBLIC_URL.wishesCreate() : PUBLIC_URL.eventCreate()} variant='purpleOutline' />
            </div>
            <div className='flex flex-col justify-center mt-3 gap-4 sm:flex-wrap sm:flex-row sm:justify-normal'>

                {events?.length == 0 && <span className='font-inter text-xl font-semibold text-center mx-auto mt-6'>Тут еще нет событий🙁</span>}

                {!slug && events?.map((item, index) => (
                    <EventItem key={index} eventData={item} />
                ))}

                {wishesByEventSlug && wishesByEventSlug?.wish.map((item, index) => (
                    <WishItem key={index} wishData={item} eventSlug={wishesByEventSlug.slug} eventTitle={wishesByEventSlug.title} />
                ))}

            </div>
        </div>
    )
}
