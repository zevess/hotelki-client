import React from 'react'
import { cn } from '~/lib/utils'
import { emojiIconVariants, type IEmojiIconVariants } from './model/types'

interface Props {
    className?: string,
    variant: IEmojiIconVariants,
    emojisCount?: number
}

export const EmojiIcon: React.FC<Props> = ({ className, variant, emojisCount }) => {
    return (
        <div className={cn('h-[60px] w-[60px] rounded-2xl flex justify-center items-center', emojiIconVariants[variant], className)}>
            {(emojisCount && emojisCount >= 7) && <span className=''>{emojisCount}</span>}
            🎁
        </div>
    )
}
