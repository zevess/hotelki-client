import React from 'react'
import { CustomButton } from '~/components/shared/CustomButton'
import { EventItem } from '~/components/shared/Events/EventItem'
import { Title } from '~/components/shared/Title'

import { cn } from '~/lib/utils'


interface Props {
    className?: string
}

export const EventsPage: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('flex flex-col w-full', className)}>
            <div className='flex items-center'>
                <Title text='События'/>
                
                <CustomButton asChild variant='purpleOutline'>
                    <a href="/events/create">Создать</a> 
                </CustomButton>
            </div>
            <div className='flex flex-col justify-center mt-3 gap-5 sm:flex-wrap sm:flex-row sm:justify-around md:justify-normal'>
                <EventItem />
                <EventItem />
                <EventItem />
                <EventItem />
            </div>
        </div>
    )
}
