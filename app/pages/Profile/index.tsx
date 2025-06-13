import React from 'react'
import { Avatar, AvatarImage } from '~/components/ui/avatar'
import { cn } from '~/lib/utils'
import PencilIcon from '../../components/icons/Pencil.svg?react'
import { PlusIcon } from 'lucide-react'
import { EventIcon } from '~/components/shared/Events/EventIcon'
import { events } from '~/lib/types/events'



interface Props {
    className?: string
}

export const ProfilePage: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('w-full md:w-[346px]', className)}>
            <div className='flex items-center'>
                <Avatar className='w-[56px] h-[56px] mr-6'>
                    <AvatarImage src='https://github.com/zevess.png ' />
                </Avatar>
                <div>
                    <span className='font-open-sans font-bold text-xl'>Привет, Name </span>
                    <a href='/profile/edit' className='flex items-center p-1 gap-4 mt-3 border-2 border-transparent transition duration-200 rounded-xl hover:border-[#C084FC] hover:bg-gray-200'>
                        <PencilIcon className='text-[#C084FC]' />
                        <span className='text-[#C084FC] text-sm font-semibold'>Редактировать</span>
                    </a>
                </div>
            </div>
            <div className='mt-10 flex flex-col'>
                <div className='flex justify-between items-center'>
                    <span className='font-open-sans font-bold text-xl'>События</span>
                    <a href='/events' className='font-open-sans text-base font-normal hover:text-[#C084FC]'>Посмотреть все</a>
                </div>

                <div className='flex flex-wrap gap-3 mt-[3px]'>
                    
                    <EventIcon variant='create' />
                    {events.slice(0,3).map((item, index) => (
                        <EventIcon variant='event' emoji={item.emoji} title={item.title}/>
                    ))}
                    {/* <EventIcon variant='event' /> */}
                    {/* <EventIcon variant='event' /> */}
                </div>

            </div>
            
        </div>
    )
}
