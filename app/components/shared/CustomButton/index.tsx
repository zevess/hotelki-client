import React from 'react'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'
import { buttonVariants, type IButtonVariants } from './model/types'

interface Props {
    className?: string,
    onClick?: () => void
    children?: React.ReactNode,
    variant: IButtonVariants,
    asChild?: boolean | undefined
}


export const CustomButton: React.FC<Props> = ({ className, variant, onClick, asChild, children }) => {
    return (
        <Button asChild={asChild} onClick={onClick} className={cn('border-2 font-inter h-10 ', buttonVariants[variant], className)}>
            {children}
        </Button>
    )
}
