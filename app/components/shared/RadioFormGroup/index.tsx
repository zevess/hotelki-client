import { useState } from 'react';
import React from 'react'
import { cn } from '~/lib/utils';

type radioGroup = {
    value: string,
    label: string
}

interface Props {
    className?: string
    radioGroupValues: radioGroup[]
    setSelected: React.Dispatch<React.SetStateAction<any>>, //поменять тип с any
    selected: string
}

export const RadioFormGroup: React.FC<Props> = ({ className, radioGroupValues, setSelected, selected }) => {

    return (
        <div className={cn("flex flex-wrap gap-5", className)}>
            {radioGroupValues.map((option, index) => (
                <div key={index} className="flex items-center">
                    <input type="radio" id={option.value} checked={selected === option.value} onChange={() => setSelected(option.value)} className="sr-only" />

                    <label htmlFor={option.value} className={`flex items-center justify-center w-5 h-5 rounded-full border-2 cursor-pointer ${selected == option.value ? 'bg-[#C084FC] ' : 'border-[#D4D4D8] bg-white'} transition duration-200`}></label>

                    <label htmlFor={option.value} className="font-inter text-black ml-2 text-base font-normal cursor-pointer">
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    );
}