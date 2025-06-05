import React from 'react'
import { Input } from '~/components/ui/input'
import { cn } from '~/lib/utils'
import { Title } from '../Title'
import { EmojiIcon } from '../EmojiIcon'
import { CustomButton } from '../CustomButton'
import { RoundedCheckbox } from '../RoundedCheckbox'

interface Props {
    className?: string,
    formTitle: string,
}

export const Form: React.FC<Props> = ({ className, formTitle }) => {
    return (
        <div className={cn('bg-white w-full h-full flex flex-col items-start p-6 gap-2.5 rounded-[20px] max-h-[736px]')}>
            <Title text={formTitle} />
            <div className='flex items-center w-full gap-5'>
                <EmojiIcon variant='form' />
                <Input className='flex-1 '></Input>
            </div>
            <Input></Input>
            <div className='flex gap-5 w-full'>
                <Input></Input>
                <Input></Input>
            </div>

            <div>
                <span>Приоритет:</span>
                <div className='flex'>
                    <div>
                        <RoundedCheckbox/>
                    </div>

                </div>
            </div>

            <CustomButton variant='purple'>Сохранить</CustomButton>
        </div>
    )
}
