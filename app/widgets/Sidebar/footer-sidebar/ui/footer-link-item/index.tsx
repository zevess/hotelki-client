import React from 'react'
import { cn } from '~/lib/utils'

interface Props {
    className?: string,
    item: INavItem
}

export const LinkItem: React.FC<Props> = ({ className, item }) => {
    return (

        <a href={item.url} className='flex flex-col gap-1 items-center'>
            <item.icon className={item.isAction ? 'text-[#C084FC]' : 'text-black'} />
            <span className={cn("font-inter font-semibold text-xs sm:text-sm md:text-base", item.isAction ? 'text-[#C084FC] ' : 'text-black')}>{item.title}</span>
        </a>


    )
}
