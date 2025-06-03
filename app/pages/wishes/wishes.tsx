import React from 'react'
import { CustomButton } from '~/components/shared/CustomButton'
import { WishesItem } from '~/components/shared/Wishes/WishesItem'
import { cn } from '~/lib/utils'

interface Props {
    className?: string
}

export const WishesPage: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('max-w-[865px]', className)}>
            <div className='flex items-center'>
                <span className='font-open-sans font-bold text-xl mr-4'>Все хотелки</span>
                <CustomButton variant='purpleOutline'>Создать</CustomButton>
            </div>
            <div className='flex flex-wrap gap-5 mt-3'>
                <WishesItem/>
                <WishesItem/>
                <WishesItem/>
                <WishesItem/>

            </div>
        </div>
    )
}
