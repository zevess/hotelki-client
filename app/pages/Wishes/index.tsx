import React from 'react'
import { CustomButton } from '~/components/shared/CustomButton'
import { Title } from '~/components/shared/Title'
import { WishItem } from '~/components/shared/Wishes/WishItem'


import { cn } from '~/lib/utils'
import type { IWishes } from './model/types'




interface Props {
    className?: string,
    title: string,
    wishes: IWishes[]
}

export const WishesPage: React.FC<Props> = ({ className, title, wishes }) => {
    return (
        <div className={cn('flex flex-col', className)}>
            <div className='flex items-center'>
                <Title text={title || 'Все хотелки'} />
                <CustomButton variant='purpleOutline'>Создать</CustomButton>
            </div>
            <div className='flex flex-col justify-center mt-3 gap-4 sm:flex-wrap sm:flex-row sm:justify-around md:justify-normal'>
                {wishes.map((item, index) => (
                    <WishItem title={item.title} price={item.price} link={item.link} emoji={item.emoji} />
                ))}
            </div>
        </div>

    )
}
