import React from 'react'
import { CustomButton } from '~/components/shared/CustomButton'
import { EventItem } from '~/components/shared/Events/EventItem'
import { WishesItem } from '~/components/shared/Wishes/WishesItem'
import { cn } from '~/lib/utils'

interface Props {
    className?: string
}

export const WishesPage: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('flex flex-col', className)}>
            <div className='flex items-center'>
                <span className='font-open-sans font-bold text-xl mr-4'>Все хотелки</span>
                <CustomButton variant='purpleOutline'>Создать</CustomButton>
            </div>
            <div className='flex flex-col justify-center mt-3 gap-4 sm:flex-wrap sm:flex-row sm:justify-around md:justify-normal'>
                <WishesItem/>
                <WishesItem/>
                <WishesItem/>
                <WishesItem/>
            </div>
        </div>
       
    )
}
