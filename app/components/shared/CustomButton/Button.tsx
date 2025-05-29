import React from 'react'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'

const buttonVariants = {
    purpleOutline: 'border-[#C084FC] bg-transparent text-[#C084FC] hover:text-white hover:bg-[#C084FC]',
    purple: 'border-[#C084FC] bg-[#C084FC] text-white font-bold text-sm hover:bg-white hover:text-[#C084FC]',
    redOutline: 'border-[#EF4444] bg-trasparent text-[#EF4444] hover:text-white hover:bg-[#EF4444]'
}

type ButtonVariants = keyof typeof buttonVariants

interface Props {
    className?: string,
    onClick?: () => void
    children?: React.ReactNode,
    variant: ButtonVariants
}



export const CustomButton: React.FC<Props> = ({ className, variant, onClick, children }) => {
    return (
        <Button onClick={onClick} className={cn('border-2 font-inter h-10 ', buttonVariants[variant], className)}>
            {children}
        </Button>
    )
}
