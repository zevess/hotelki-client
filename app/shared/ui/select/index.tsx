import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../shadcn/select'
import type { IEventResponse } from '~/entities/event/model/event.types'

interface Props {
    className?: string,
    selectItems: IEventResponse[] | undefined,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    disabled: boolean,
    defaultValue: string
}

export const SelectInput: React.FC<Props> = ({ className, selectItems, setValue, disabled, defaultValue }) => {
    
    return (
        <Select value={defaultValue} disabled={disabled} onValueChange={setValue}>
            <SelectTrigger className={className}>
                <SelectValue placeholder={'Событие'}></SelectValue>
            </SelectTrigger>
            <SelectContent>
                {selectItems && selectItems.map((item, index) => (
                    <SelectItem key={index} value={item.id}>{item.title} {item.emoji}</SelectItem>
                ))}
            </SelectContent>
        </Select>

    )
}
