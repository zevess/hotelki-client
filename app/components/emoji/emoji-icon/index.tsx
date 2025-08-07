import React from 'react'
import { cn } from '~/lib/utils'
import { emojiIconVariants, type IEmojiIconVariants } from './model/types'

interface Props {
    className?: string,
    variant: IEmojiIconVariants,
    emojisCount?: number,
    emoji: string,
    action?: () => void
}

export const EmojiIcon: React.FC<Props> = ({ className, variant, emojisCount, emoji,  action }) => {

    return (
        <div onClick={action} className={cn('h-[60px] w-[60px] rounded-2xl flex justify-center items-center border-2 border-transparent', emojiIconVariants[variant], className)}>
            {(emojisCount && emojisCount >= 7) && <span className=''>{emojisCount}</span>}
            {emoji}
        </div>
    )

}

//🎁
