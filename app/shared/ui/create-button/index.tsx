import React from 'react'
import { CustomButton } from '../custom-button'
import type { IButtonVariants } from '../custom-button/model/types'
import { useProfile } from '~/entities/auth/api/useProfile'

import { Link } from 'react-router'
import { PUBLIC_URL } from '~/shared/config/url.config'

interface Props {
    className?: string,
    variant: IButtonVariants,
    href: string,
}

export const CreateButton: React.FC<Props> = ({ className, variant, href }) => {
    const { user } = useProfile()

    return (
        <CustomButton asChild variant={variant}>
            <Link to={user ? href : PUBLIC_URL.auth()}>Создать</Link>
        </CustomButton>
    )
}
