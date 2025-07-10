import { EllipsisVertical } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card'


import { format, formatDuration, intervalToDuration } from 'date-fns'
import { ru } from 'date-fns/locale'
import { getRemainingTime } from '~/lib/dateTransform'
import { EmojiIcon } from '~/components/emoji/emoji-icon'
import type { IEventResponse } from '~/entities/event/event.types'
import { PUBLIC_URL } from '~/lib/config/url.config'
import { OptionsDropdown } from '~/components/options-dropdown'
import { useAuthStore } from '~/lib/store/authStore'


interface Props {
    className?: string,
    eventData: IEventResponse
}

export const EventItem: React.FC<Props> = ({ className, eventData }) => {


    const { user } = useAuthStore()
    const isoDate = new Date(eventData.date)
    const formatedDate = format(eventData.date, "d MM yyyy", { locale: ru });
    const duration = intervalToDuration({ start: new Date(), end: isoDate })
    const formatedRemainingTime = formatDuration(duration, {
        format: ['days'], locale: ru
    })

    const wishes = eventData.wish

    return (
        <a href={PUBLIC_URL.eventSlug(eventData.userId, eventData.slug)}>
            <Card className='w-full sm:w-[261px] sm:h-[284px] flex flex-col justify-between p-6 cursor-pointer transition duration-200 border-2 border-transparent shadow-none hover:border-[#C084FC] hover:'>
                <CardHeader className='flex justify-between items-center h-10 p-0 m-0'>
                    <div className='flex flex-col'>
                        <span className='font-inter text-[14px] font-bold'>{eventData.emoji} {eventData.title}</span>
                        {wishes && <span className='font-inter font-normal text-xs'>{wishes.length} хотелки</span>}
                    </div>
                    {user && <OptionsDropdown type='EVENT' itemId={eventData.id} editPageLink={`/events/${eventData.userId}/${eventData.slug}`} />}

                </CardHeader>
                <CardContent className='min-h-[132px] flex flex-wrap items-center justify-around p-0 sm:gap-3'>

                    {wishes.length == 0 && <span className='font-inter text-base font-normal text-center mx-auto'>Тут еще нет хотелок 🙁</span>}

                    {wishes && (wishes.length > 6 ?
                        <EmojiIcon emoji='🎁' className='mr-auto ml-auto' variant='event' emojisCount={wishes.length} />
                        :
                        wishes.slice(0, 6).map((item, index) => (
                            <EmojiIcon emoji={item.emoji} variant='event' key={index} emojisCount={wishes.length} />
                        )))}

                </CardContent>
                <CardFooter className='flex justify-between items-center p-0 m-0'>
                    <span className='font-inter font-normal text-xs'>{formatedDate}</span>
                    {formatedRemainingTime && <div className='h-6 bg-[#FAF5FF] rounded-full flex items-center justify-center px-1'>
                        <span className='font-inter font-normal text-xs py-1 px-2'>Через {formatedRemainingTime}</span>
                    </div>}

                </CardFooter>
            </Card>
        </a>
    )
}
