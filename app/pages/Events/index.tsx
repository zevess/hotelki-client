import React from 'react'
import { CreateButton } from '~/components/create-button'
import { CustomButton } from '~/components/custom-button'
import { Title } from '~/components/title'
import { eventService } from '~/entities/event/event.service'
import { EventItem } from '~/features/event/ui/event-item'
import { WishItem } from '~/features/wish/ui/wish-item'
import { useGetEvents } from '~/hooks/queries/event/useGetEvents'
import { useGetWishesByEvent } from '~/hooks/queries/event/useGetWishesByEvent'
import { useGetUserProfile } from '~/hooks/queries/user/useGetUserProfile'
import { useProfile } from '~/hooks/useProfile'
import { PUBLIC_URL } from '~/lib/config/url.config'
import { useAuthStore } from '~/lib/store/authStore'

import { cn } from '~/lib/utils'


interface Props {
    className?: string,
    userId: string,
    slug?: string,
}

export const EventsPage: React.FC<Props> = ({ className, userId, slug }) => {

    const { events } = useGetEvents(userId)
    const { wishesByEventSlug } = useGetWishesByEvent(userId, slug)
    const { user } = useProfile()

    // const { userProfile } = useGetUserProfile(userId)
    // const { setCurrentUser } = useAuthStore()

    // React.useEffect(() => {
    //     userProfile && setCurrentUser(userProfile)
    // }, [])

    const isSameUser = user?.id === userId

    return (
        <div className={cn('flex flex-col w-full', className)}>
            <div className='flex items-center'>
                <Title text={slug ? wishesByEventSlug?.title : "События"} />
                <CreateButton href={slug ? PUBLIC_URL.wishesCreate() : PUBLIC_URL.eventCreate()} variant='purpleOutline' />
            </div>
            <div className='flex flex-col justify-center mt-3 gap-5 sm:flex-wrap sm:flex-row sm:justify-around md:justify-normal'>

                {!slug && events?.map((item, index) => (
                    <EventItem key={index} eventData={item} />
                ))}

                {slug && wishesByEventSlug?.wish.map((item, index) => (
                    <WishItem key={index} wishData={item} eventSlug={wishesByEventSlug.slug} eventTitle={wishesByEventSlug.title} />
                ))}

            </div>
        </div>
    )
}
