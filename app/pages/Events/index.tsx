import React from 'react'
import { CustomButton } from '~/components/shared/CustomButton'
import { EventItem } from '~/components/shared/Events/EventItem'
import { Title } from '~/components/shared/Title'
import { WishItem } from '~/components/shared/Wishes/WishItem'
import { eventService } from '~/entities/event/event.service'
import { useGetEvents } from '~/hooks/queries/event/useGetEvents'
import { useGetWishesByEvent } from '~/hooks/queries/event/useGetWishesByEvent'

import { wishes } from '~/lib/types/wishes'

import { cn } from '~/lib/utils'


interface Props {
    className?: string,
    userId: string,
    slug?: string,
}

export const EventsPage: React.FC<Props> = ({ className, userId, slug }) => {

    const { events } = useGetEvents(userId)

    const { wishesByEventSlug } = useGetWishesByEvent(userId, slug)

    console.log(wishesByEventSlug)
    // wishesByEventSlug?.wish.map((item) =>{
    //     console.log(item.title)
    // })

    return (
        <div className={cn('flex flex-col w-full', className)}>
            <div className='flex items-center'>
                <Title text={slug ? wishesByEventSlug?.title : "События"} />

                <CustomButton asChild variant='purpleOutline'>
                    <a href="/events/create">Создать</a>
                </CustomButton>
            </div>
            <div className='flex flex-col justify-center mt-3 gap-5 sm:flex-wrap sm:flex-row sm:justify-around md:justify-normal'>
                {!slug && events?.map((item, index) => (
                    <EventItem key={index} userId={item.userId} slug={item.slug} title={item.title} date={item.date} wishes={item.wish} />
                ))}

                {slug && wishesByEventSlug?.wish.map((item, index) => (
                    // <p>{item.title}</p>
                    <WishItem key={index} title={item.title} price={item.price} link={item.link} emoji={item.emoji} slug={wishesByEventSlug.slug} eventTitle={wishesByEventSlug.title} userId={item.userId} />
                ))}


                {/* <EventItem title={'День рождения'} date={'17.01.2026'} wishes={wishes} />
                <EventItem title={'Турнир'} date={'05.11.2025'} wishes={wishes} />
                <EventItem title={'Экзамен'} date={'30.09.2025'} wishes={wishes} />
                <EventItem title={'Отчисление'} date={'31.05.2028'} wishes={wishes} /> */}
            </div>
        </div>
    )
}
