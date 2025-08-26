import React from 'react'
import { cn } from '~/shared/lib/utils'
import { Avatar, AvatarImage } from '~/shared/ui/shadcn/avatar'

interface Props {
    className?: string,
    src: string | undefined
}

export const UserAvatar: React.FC<Props> = ({ className, src}) => {
    return (
        <Avatar className={cn('size-14', className)} >
            <AvatarImage src={src}/>
        </Avatar>
    )
}
