import { PencilIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import { PUBLIC_URL } from '~/shared/config/url.config'


interface Props {
    className?: string
}

export const ProfileEditButton: React.FC<Props> = ({ className }) => {
    return (
        <Link to={PUBLIC_URL.profileEdit()} className='flex items-center p-1 gap-4 mt-3 border-2 border-transparent transition duration-200 rounded-xl hover:border-[#C084FC] hover:bg-gray-200'>
            <PencilIcon className='text-[#C084FC]' />
            <span className='text-[#C084FC] text-sm font-semibold'>Редактировать</span>
        </Link>
    )
}
