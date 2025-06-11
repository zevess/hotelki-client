import { EllipsisVertical } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card'
import { EmojiIcon } from '../../Emoji/EmojiIcon'

interface Props {
    className?: string,
    title: string,
    date: string,
    wishes: any[]
    // price: number
}

export const EventItem: React.FC<Props> = ({ className, title, date, wishes }) => {

    
    return (
        <a href={`/events/${title}`}>
            <Card className='w-full sm:w-[261px] sm:h-[284px] flex flex-col justify-between p-6 cursor-pointer hover:border-[#C084FC]'>
                <CardHeader className='flex justify-between items-center h-10 p-0 m-0'>
                    <div className='flex flex-col'>
                        <span className='font-inter text-[14px] font-bold'>{title}</span>
                        <span className='font-inter font-normal text-xs'>{wishes.length} хотелки</span>
                    </div>
                    <EllipsisVertical />
                </CardHeader>
                <CardContent className='min-h-[132px] flex flex-wrap items-center justify-around p-0 sm:gap-3'>


                    {wishes.length == 0 && <span className='font-inter text-base font-normal text-center mx-auto'>Тут еще нет хотелок🙁</span>}

                    {wishes.length > 6 ?
                        <EmojiIcon emoji='🎁' className='mr-auto ml-auto' variant='event' emojisCount={wishes.length} />
                        :
                        wishes.slice(0, 6).map((item, index) => (
                            <EmojiIcon emoji={item.emoji} variant='event' key={index} emojisCount={wishes.length} />
                        ))}


                    {/* <div className='h-[60px] w-[60px] bg-[#FAF5FF] rounded-2xl flex justify-center items-center'>
                    🎁
                </div>
                <div className='h-[60px] w-[60px] bg-[#FAF5FF] rounded-2xl flex justify-center items-center'>
                    🎁
                </div>
                <div className='h-[60px] w-[60px] bg-[#FAF5FF] rounded-2xl flex justify-center items-center'>
                    🎁
                </div>
                <div className='h-[60px] w-[60px] bg-[#FAF5FF] rounded-2xl flex justify-center items-center'>
                    🎁
                </div> */}

                </CardContent>
                <CardFooter className='flex justify-between items-center p-0 m-0'>
                    <span className='font-inter font-normal text-xs'>{date}</span>
                    <div className='h-6 w-[88px] bg-[#FAF5FF] rounded-full flex items-center justify-center px-1'>
                        <span className='font-inter font-normal text-xs'>Через 4 дня</span>

                    </div>
                </CardFooter>
            </Card>
        </a>

    )
}
