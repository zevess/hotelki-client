import React from 'react'
import { Link } from 'react-router'
import { cn } from '~/shared/lib/utils'

interface Props {
    className?: string,
    item: INavItem,
}

export const MobileLinkItem: React.FC<Props> = ({ className, item }) => {
    return (
        <Link to={item.url} className='flex flex-row p-1 py-2 gap-4 min-h-8 my-1 hover:bg-gray-100 rounded-xl items-center transition duration-200'>
            <item.icon className={item.isAction ? 'text-[#C084FC]' : 'text-black'} />
            <span className={cn("font-inter font-semibold text-lg sm:text-sm md:text-base", item.isAction ? 'text-[#C084FC] ' : 'text-black')}>{item.title}</span>
        </Link>
    )
}
