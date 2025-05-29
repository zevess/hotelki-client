import React from 'react'
import { ProfileEdit } from '~/components/shared/Profile/ProfileEdit/ProfileEdit'

interface Props {
    className?: string
}

export const ProfilePage: React.FC<Props> = ({ className }) => {
    return (
        <ProfileEdit />
    )
}
