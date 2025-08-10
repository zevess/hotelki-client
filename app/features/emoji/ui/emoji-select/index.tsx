import React from 'react'
import { EmojiIcon } from '../../../../shared/ui/emoji-icon'
import EmojiPicker from 'emoji-picker-react'

interface Props {
    className?: string
    emoji: string,
    setEmoji: React.Dispatch<React.SetStateAction<string>>
}

export const EmojiChoose: React.FC<Props> = ({ className, emoji, setEmoji }) => {

    const [isEmojiOpen, setIsEmojiOpen] = React.useState(false);


    return (
        <div className='relative flex flex-col'>
            <EmojiIcon emoji={emoji} variant='button' action={() => setIsEmojiOpen(!isEmojiOpen)} />
            {isEmojiOpen &&
                <div className='absolute z-50 mt-17'>
                    <EmojiPicker skinTonesDisabled style={{ width: '280px', height: '350px' }} onEmojiClick={(e) => {
                        setEmoji(e.emoji)
                        setIsEmojiOpen(!isEmojiOpen)
                    }} />
                </div>

            }
        </div>
    )
}
