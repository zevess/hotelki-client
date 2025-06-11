import React from 'react'
import { CustomButton } from '~/components/shared/CustomButton'
import { EmojiChoose } from '~/components/shared/Emoji/EmojiChoose'
import { RadioFormGroup } from '~/components/shared/RadioFormGroup'
import { Input } from '~/components/ui/input'
import { priorities } from '~/lib/types/priorities'

interface Props {
    className?: string
}

export const EventsForm: React.FC<Props> = ({ className }) => {

    const [emoji, setEmoji] = React.useState('🎁');

    return (
        <>
            <div className='flex items-center w-full gap-5'>
                <EmojiChoose emoji={emoji} setEmoji={setEmoji} />
                <Input placeholder='Название' className='flex-1'></Input>
            </div>
            <Input placeholder='Дата' type='date'></Input>
            <CustomButton className='mt-5' variant='purple'>Сохранить</CustomButton>
        </>

    )
}
