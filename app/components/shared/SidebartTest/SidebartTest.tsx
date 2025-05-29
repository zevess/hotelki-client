import React from 'react'
import { Avatar, AvatarImage } from '~/components/ui/avatar'

import ProfileIcon from '../../icons/User.svg?react'
import CalendarIcon from '../../icons/Calendar.svg?react'
import PencilIcon from '../../icons/Pencil.svg'
import HeartIcon from '../../icons/Heart.svg?react'
import PlusCircleIcon from '../../icons/PlusCircle.svg?react'
import SignOutIcon from '../../icons/SignOut.svg?react'
import { cn } from '~/lib/utils'


interface Props {
    className?: string
}

interface ISidebar {
    title: string,
    url: string,
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    isAction?: boolean
}

const items: ISidebar[] = [
    {
        title: "Профиль",
        url: "profile",
        icon: ProfileIcon,
    },
    {
        title: "События",
        url: "#",
        icon: CalendarIcon,
    },
    {
        title: "Хотелки",
        url: "#",
        icon: HeartIcon,
    },
    {
        title: "Добавить событие",
        url: "#",
        icon: PlusCircleIcon,
        isAction: true
    },
    {
        title: "Добавить хотелку",
        url: "#",
        icon: PlusCircleIcon,
        isAction: true
    },
]

//h-[736px] max-h-[736px]
export const SidebartTest: React.FC<Props> = ({ className }) => {
    return (
        <div className={'flex flex-col max-h-[736px] h-full w-[287px] bg-white rounded-xl p-3 mr-10'}>
            <div className='flex justify-between items-center mb-4'>
                <span className='font-inter font-semibold text-base'>Name</span>
                <Avatar>
                    <AvatarImage src='https://github.com/zevess.png' />
                </Avatar>
            </div>
            <div className='flex flex-col h-full justify-between '>
                <div className='gap-5'>
                    {items.map((item, index) =>
                        <a href={item.url} key={index} className='flex flex-row p-1 gap-4 h-8 my-2 hover:bg-gray-100 rounded-xl '>
                            <item.icon className={item.isAction ? 'text-[#C084FC]' : 'text-black'} />
                            <span className={cn("font-inter font-semibold text-base", item.isAction ? 'text-[#C084FC] ' : 'text-black')}>{item.title}</span>
                        </a>
                    )}
                </div>
                <a href='#' className='flex flex-row p-1 gap-4 h-8 hover:bg-gray-100 rounded-xl '>
                    <SignOutIcon className='text-[#EF4444]' />
                    <span className='text-base font-semibold text-[#EF4444] px-4'>Выйти из профиля</span>
                </a>
            </div>
        </div>
    )
}

