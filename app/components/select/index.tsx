import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import type { IEvent, IEventResponse } from '~/entities/event/event.types'

interface Props {
    className?: string,
    selectItems: IEventResponse[] | undefined,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export const SelectInput: React.FC<Props> = ({ className, selectItems, setValue }) => {
    return (

        <Select onValueChange={setValue}>
            <SelectTrigger className={className}>
                <SelectValue placeholder={'Событие'} />
            </SelectTrigger>
            <SelectContent>
                {selectItems && selectItems.map((item, index) => (
                    <SelectItem key={index} value={item.id}>{item.title} {item.emoji}</SelectItem>
                ))}
            </SelectContent>
        </Select>


    )
}
