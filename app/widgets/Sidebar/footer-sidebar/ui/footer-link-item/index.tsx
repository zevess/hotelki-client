import React from 'react'
import { Link } from 'react-router'
import { cn } from '~/shared/lib/utils'

interface Props {
    className?: string,
    item: INavItem
}

export const LinkItem: React.FC<Props> = ({ className, item }) => {
    return (

        <Link to={item.url} reloadDocument={item.title === 'Профиль'} className='flex flex-col gap-1 items-center'>
            <item.icon className={item.isActive ? 'text-[#C084FC]' : 'text-black'} />
            <span className={cn("font-inter font-semibold text-xs sm:text-sm md:text-base", item.isActive ? 'text-[#C084FC] ' : 'text-black')}>{item.title}</span>
        </Link>

    )
}
