export const buttonVariants = {
    purpleOutline: 'border-[#C084FC] bg-transparent text-[#C084FC] hover:text-white hover:bg-[#C084FC]',
    purple: 'border-[#C084FC] bg-[#C084FC] text-white font-bold text-sm hover:bg-white hover:text-[#C084FC]',
    purpleBorderless: 'shadow-none border-2 border-transparent bg-transparent text-[#C084FC] font-bold text-sm hover:border-2 hover:border-[#C084FC] hover:bg-transparent',
    redOutline: 'border-[#EF4444] bg-trasparent text-[#EF4444] hover:text-white hover:bg-[#EF4444]',
    base: '',
}

export type IButtonVariants = keyof typeof buttonVariants