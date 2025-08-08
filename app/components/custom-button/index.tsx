import React from 'react'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'
import { buttonVariants, type IButtonVariants } from './model/types'


interface Props {
    className?: string,
    onClick?: () => void
    children?: React.ReactNode,
    variant: IButtonVariants,
    asChild?: boolean | undefined,
    type?: 'button' | 'reset' | 'submit',
    disabled?: boolean
}

export const CustomButton: React.FC<Props> = ({ className, variant, onClick, asChild, children, type, disabled }) => {
    return (
        <Button disabled={disabled} type={type} asChild={asChild} onClick={onClick} className={cn('border-2 font-inter h-10 cursor-pointer', buttonVariants[variant], className)}>
            {children}
        </Button>
    )
}
