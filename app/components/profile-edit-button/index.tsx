import { PencilIcon } from 'lucide-react'
import React from 'react'

interface Props {
    className?: string
}

export const ProfileEditButton: React.FC<Props> = ({ className }) => {
    return (
        <a href='/profile/edit' className='flex items-center p-1 gap-4 mt-3 border-2 border-transparent transition duration-200 rounded-xl hover:border-[#C084FC] hover:bg-gray-200'>
            <PencilIcon className='text-[#C084FC]' />
            <span className='text-[#C084FC] text-sm font-semibold'>Редактировать</span>
        </a>
    )
}
