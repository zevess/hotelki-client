import { PencilIcon, Settings } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import { PUBLIC_URL } from '~/shared/config/url.config'


interface Props {
    className?: string
}

export const ProfileEditButton: React.FC<Props> = ({ className }) => {
    return (
        <Link to={PUBLIC_URL.profileEdit()}>
            <Settings size={'25'} className='hover:text-[#C084FC] transition duration-200' />
        </Link>
    )
}
