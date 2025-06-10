import React from 'react'
import { Input } from '~/components/ui/input'
import { cn } from '~/lib/utils'
import { Title } from '../Title'
import { EmojiIcon } from '../EmojiIcon'
import { CustomButton } from '../CustomButton'
import { RadioFormGroup } from '../RadioFormGroup'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { priorities } from '~/lib/types/priorities'

interface Props {
    className?: string,
    formTitle: string,
    formType: 'eventCreate' | 'eventEdit' | 'wishCreate' | 'wishEdit'
}




export const Form: React.FC<Props> = ({ className, formTitle }) => {


    const [priority, setPriority] = React.useState('');

    console.log(priority)


    return (
        <div className={cn('bg-white w-full h-full flex flex-col items-start p-6 gap-2.5 rounded-[20px] max-h-[736px]')}>
            <Title text={formTitle} />
            <div className='flex items-center w-full gap-5'>
                <EmojiIcon variant='form' />
                <Input className='flex-1 '></Input>
            </div>
            <Input></Input>
            <div className='flex gap-2 w-full'>
                <Input></Input>
                <Input></Input>
            </div>

            <div>
                <span className='font-inter font-normal text-[#71717A] text-sm'>
                    Приоритет:
                </span>
                
                <RadioFormGroup radioGroupValues={priorities} setSelected={setPriority} selected={priority} className='mt-2.5' />
            </div>

            <CustomButton className='mt-5' onClick={() => alert(priority)} variant='purple'>Сохранить</CustomButton>
        </div>
    )
}
