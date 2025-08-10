import React from 'react'
import { cn } from '~/shared/lib/utils'
import { Title } from '../title'
import { EventForm } from '~/features/event/ui/event-form'
import { WishesForm } from '~/features/wish/ui/wish-form'



interface Props {
    className?: string,
    formTitle: string,
    formType: 'eventCreate' | 'eventEdit' | 'wishCreate' | 'wishEdit',
    isEditing: boolean
}


export const Form: React.FC<Props> = ({ className, formTitle, formType, isEditing }) => {

    return (
        <div className={cn('bg-white w-full h-full flex flex-col items-start p-6 gap-2.5 rounded-[20px] max-h-[736px]')}>
            <Title text={formTitle} />

            {(formType == 'eventCreate' || formType == 'eventEdit') && <EventForm isEditing={isEditing} />}
            {(formType == 'wishCreate' || formType == 'wishEdit') && <WishesForm isEditing={isEditing} />}

        </div>
    )
}
