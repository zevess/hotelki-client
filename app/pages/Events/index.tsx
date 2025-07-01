import React from 'react'
import { CustomButton } from '~/components/shared/CustomButton'
import { EventItem } from '~/components/shared/Events/EventItem'
import { Title } from '~/components/shared/Title'
import { useGetEvents } from '~/hooks/queries/event/useGetEvents'

import { wishes } from '~/lib/types/wishes'

import { cn } from '~/lib/utils'


interface Props {
    className?: string,
    userId: string
}

export const EventsPage: React.FC<Props> = ({ className, userId }) => {

    const { events } = useGetEvents(userId)

    console.log(events)

    return (
        <div className={cn('flex flex-col w-full', className)}>
            <div className='flex items-center'>
                <Title text='События' />

                <CustomButton asChild variant='purpleOutline'>
                    <a href="/events/create">Создать</a>
                </CustomButton>
            </div>
            <div className='flex flex-col justify-center mt-3 gap-5 sm:flex-wrap sm:flex-row sm:justify-around md:justify-normal'>
                {events?.map((item, index) => (
                    <EventItem key={index} title={item.title} date={item.date} wishes={item.wish} />
                ))}
                {/* <EventItem title={'День рождения'} date={'17.01.2026'} wishes={wishes} />
                <EventItem title={'Турнир'} date={'05.11.2025'} wishes={wishes} />
                <EventItem title={'Экзамен'} date={'30.09.2025'} wishes={wishes} />
                <EventItem title={'Отчисление'} date={'31.05.2028'} wishes={wishes} /> */}
            </div>
        </div>
    )
}
