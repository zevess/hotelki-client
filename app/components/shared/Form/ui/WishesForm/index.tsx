import React from 'react'
import { CustomButton } from '~/components/shared/CustomButton'
import { EmojiChoose } from '~/components/shared/Emoji/EmojiChoose'
import { RadioFormGroup } from '~/components/shared/RadioFormGroup'
import { Input } from '~/components/ui/input'
import { priorities } from '~/lib/types/priorities'

interface Props {
    className?: string
}

export const WishesForm: React.FC<Props> = ({ className }) => {

    const [priority, setPriority] = React.useState('');
    const [emoji, setEmoji] = React.useState('🎁');

    return (
        <>

            <div className='flex items-center w-full gap-5'>
                <EmojiChoose emoji={emoji} setEmoji={setEmoji} />
                <Input placeholder='Название' className='flex-1'></Input>
            </div>

            <Input placeholder='Событие'></Input>
            <div className='flex gap-2 w-full'>
                <Input placeholder='Ссылка'></Input>
                <Input placeholder='Цена'></Input>
            </div>

            <div>
                <span className='font-inter font-normal text-[#71717A] text-sm'>
                    Приоритет:
                </span>
                <RadioFormGroup radioGroupValues={priorities} setSelected={setPriority} selected={priority} className='mt-2.5' />
            </div>

            <CustomButton className='mt-5' variant='purple'>Сохранить</CustomButton>

        </>
    )
}
