import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../shadcn/tooltip'
import { TooltipArrow } from '@radix-ui/react-tooltip'

interface Props {
    className?: string,
    children: React.ReactNode,
    tooltipContentText: string
}

export const CustomTooltip: React.FC<Props> = ({ className, children, tooltipContentText }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent className=''>

                    <p>{tooltipContentText}</p>

                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}
