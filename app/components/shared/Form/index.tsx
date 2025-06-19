import React from 'react'
import { Input } from '~/components/ui/input'
import { cn } from '~/lib/utils'
import { Title } from '../Title'
import { EmojiIcon } from '../Emoji/EmojiIcon'
import { CustomButton } from '../CustomButton'
import { RadioFormGroup } from '../RadioFormGroup'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { priorities } from '~/lib/types/priorities'
import EmojiPicker from 'emoji-picker-react'
import { EmojiChoose } from '../Emoji/EmojiChoose'
import { EventsForm } from './ui/EventsForm'
import { WishesForm } from './ui/WishesForm'



interface Props {
    className?: string,
    formTitle: string,
    formType: 'eventCreate' | 'eventEdit' | 'wishCreate' | 'wishEdit'
}


export const Form: React.FC<Props> = ({ className, formTitle, formType }) => {

    return (
        <div className={cn('bg-white w-full h-full flex flex-col items-start p-6 gap-2.5 rounded-[20px] max-h-[736px]')}>
            <Title text={formTitle} />

            {(formType == 'eventCreate' || formType == 'eventEdit') && <EventsForm/> }
            {(formType == 'wishCreate' || formType == 'wishEdit') && <WishesForm/> }

        </div>
    )
}
