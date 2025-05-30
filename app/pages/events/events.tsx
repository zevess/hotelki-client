import React from 'react'
import { CustomButton } from '~/components/shared/CustomButton'
import { EventItem } from '~/components/shared/Events/EventItem'
import { cn } from '~/lib/utils'


interface Props {
    className?: string
}

export const EventsPage: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('w-[865px] mr-auto', className)}>
            <div className='flex items-center'>
                <span className='font-open-sans font-bold text-xl mr-4'>События</span>
                <CustomButton variant='purpleOutline'>Создать</CustomButton>
            </div>
            <div className='flex flex-wrap gap-5 mt-3'>
                <EventItem />
                <EventItem />
                <EventItem />
                <EventItem />
            </div>


        </div>
    )
}
