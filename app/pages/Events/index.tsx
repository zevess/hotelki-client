import React from 'react'
import { CustomButton } from '~/components/shared/CustomButton'
import { EventItem } from '~/components/shared/Events/EventItem'
import { Title } from '~/components/shared/Title'

import { cn } from '~/lib/utils'


interface Props {
    className?: string
}

export const EventsPage: React.FC<Props> = ({ className }) => {

    const wishes = [
        {
            emoji: "🎁",
            title: "Книги по саморазвитию",
            link: "#",
            price: 1500,
            priority: "LOW"
        },
        {
            emoji: "🍽️",
            title: "Обед в любимом ресторане",
            link: "#",
            price: 3000,
            priority: "MIDDLE"
        },
        {
            emoji: "🚗",
            title: "Новая машина",
            link: "#",
            price: 2000000,
            priority: "HIGH"
        },
        {
            emoji: "🏞",
            title: "Путешествие в Италию",
            link: "#",
            price: 150000,
            priority: "DREAM"
        },
        {
            emoji: "📱",
            title: "Новый смартфон",
            link: "#",
            price: 80000,
            priority: "HIGH"
        },
        {
            emoji: "💃",
            title: "Уроки танцев",
            link: "#",
            price: 10000,
            priority: "MIDDLE"
        },
        // {
        //     emoji: "🖌️",
        //     title: "Набор кистей художника",
        //     link: "#",
        //     price: 5000,
        //     priority: "LOW"
        // }
    ];

    return (
        <div className={cn('flex flex-col w-full', className)}>
            <div className='flex items-center'>
                <Title text='События'/>
                
                <CustomButton asChild variant='purpleOutline'>
                    <a href="/events/create">Создать</a> 
                </CustomButton>
            </div>
            <div className='flex flex-col justify-center mt-3 gap-5 sm:flex-wrap sm:flex-row sm:justify-around md:justify-normal'>
                <EventItem title={'День рождения'} date={'17.01.2026'} wishes={wishes} />
                <EventItem title={'Турнир'} date={'05.11.2025'} wishes={wishes} />
                <EventItem title={'Экзамен'} date={'30.09.2025'} wishes={wishes} />
                <EventItem title={'Отчисление'} date={'31.05.2028'} wishes={wishes} />
            </div>
        </div>
    )
}
