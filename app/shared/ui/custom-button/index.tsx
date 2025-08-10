import React from 'react'

import { cn } from '~/shared/lib/utils'
import { buttonVariants, type IButtonVariants } from './model/types'
import { Button } from '../shadcn/button'


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
