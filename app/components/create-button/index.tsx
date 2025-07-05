import React from 'react'
import { CustomButton } from '../custom-button'
import type { IButtonVariants } from '../custom-button/model/types'
import { useProfile } from '~/hooks/useProfile'
import { PUBLIC_URL } from '~/lib/config/url.config'

interface Props {
    className?: string,
    variant: IButtonVariants,
    href: string,
}

export const CreateButton: React.FC<Props> = ({ className, variant, href }) => {
    const { user } = useProfile()

    return (
        <CustomButton asChild variant={variant}>
            <a href={user ? href : PUBLIC_URL.auth()}>Создать</a>
        </CustomButton>
    )
}
