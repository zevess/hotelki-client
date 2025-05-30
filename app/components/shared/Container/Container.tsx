import React, { type PropsWithChildren } from 'react'
import { cn } from '~/lib/utils';

interface Props {
    className?: string
}

export const Container: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {
    return (
        <div className='w-full bg-gray-100 min-h-screen'>
            <div className={cn('mx-auto w-full max-w-[1216px] min-h-screen px-2 relative dark:bg-black', className)}>{children}</div>
        </div>
    )
}
