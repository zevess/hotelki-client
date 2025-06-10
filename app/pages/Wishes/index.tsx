import React from 'react'
import { CustomButton } from '~/components/shared/CustomButton'
import { Title } from '~/components/shared/Title'
import { WishItem } from '~/components/shared/Wishes/WishItem'


import { cn } from '~/lib/utils'
import type { Route } from '../../routes/+types/wishes-by-tag'




interface Props {
    className?: string,
    title: string
}

export const WishesPage: React.FC<Props> = ({ className, title }) => {
    return (
        <div className={cn('flex flex-col', className)}>
            <div className='flex items-center'>
                <Title text={title || 'Все хотелки'} />
                <CustomButton variant='purpleOutline'>Создать</CustomButton>
            </div>
            <div className='flex flex-col justify-center mt-3 gap-4 sm:flex-wrap sm:flex-row sm:justify-around md:justify-normal'>
                <WishItem />
                <WishItem />
                <WishItem />
                <WishItem />
                <WishItem />
            </div>
        </div>

    )
}
