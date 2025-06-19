import { PlusIcon } from 'lucide-react'
import React from 'react'
import { cn } from '~/lib/utils'

interface Props {
    className?: string,
    variant: "create" | "event",
    emoji?: string,
    title?: string
}

export const EventIcon: React.FC<Props> = ({ className, variant, emoji, title }) => {
    return (
        <a href={variant == 'create' ? "/events/create" : "#"} className={cn('group flex flex-col items-center ml-0 max-w-[77.5px]', className)}>
            <div className='bg-[#FAF5FF] w-[77.5px] h-[77.5px] rounded-full flex items-center justify-center transition duration-200 group-hover:bg-[#efe1fc]'>
                {variant == 'create' && <PlusIcon width={24} height={24} />}
                {variant == 'event' &&
                    <div className='flex justify-center items-center w-[30px] h-[30px]'>
                        {emoji}
                    </div>
                }
            </div>
            <span className='font-inter text-xs font-normal mt-2 text-center transition duration-200 group-hover:text-[#C084FC]'>{variant == 'create' ? "Создать" : title}</span>
        </a >
    )
}
