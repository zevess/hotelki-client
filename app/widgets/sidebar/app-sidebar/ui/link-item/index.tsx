import React from 'react'
import { Link } from 'react-router'
import { cn } from '~/shared/lib/utils'

interface Props {
    className?: string,
    item: INavItem,
    isVisible?: boolean
}

export const LinkItem: React.FC<Props> = ({ className, item, isVisible }) => {
    return (
        <Link viewTransition to={item.url} className={cn('flex flex-row p-1 gap-4 min-h-8 my-2 hover:bg-gray-100 rounded-xl items-center transition duration-200', isVisible && 'hidden')}>
            <item.icon className={item.isAction ? 'text-[#C084FC]' : 'text-black'} />
            <span className={cn("font-inter font-semibold text-xs sm:text-sm md:text-base", item.isAction ? 'text-[#C084FC] ' : 'text-black')}>{item.title}</span>
        </Link>
    )
}
