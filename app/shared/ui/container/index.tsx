import React, { type PropsWithChildren } from 'react'
import { cn } from '~/shared/lib/utils';

interface Props {
    className?: string
}

export const Container: React.FC<PropsWithChildren<Props>> = ({ className, children }) => {

    return (
        <div className="w-full bg-gray-100 flex-1 flex flex-col">
            <div className={cn('mx-auto w-full max-w-[1216px] px-2 pb-5 relative flex flex-col flex-1 ', className)}>
                {children}
            </div>
        </div>
    )
}
