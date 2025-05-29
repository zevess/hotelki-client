import React from 'react'
import { SidebartTest } from '../SidebartTest'
import { cn } from '~/lib/utils'

interface Props {
    className?: string
    children: React.ReactNode
}

export const Dashboard: React.FC<Props> = ({ className, children }) => {
    return (
        <div className={cn("flex h-[calc(100vh-3.5rem)] pb-3", className)}>
            <div className="w-[287px] h-full shrink-0">
                <SidebartTest className="h-[83.33%] max-h-[786px] overflow-hidden" />
            </div>
            <div className="flex-1 h-full overflow-y-auto">
                {children}
            </div>
        </div>
    )
}
