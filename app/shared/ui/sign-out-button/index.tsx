import React from 'react'
import { OptionsAlertDialog } from '../options-alert-dialog'
import SignOutIcon from '../icons/SignOut.svg?react'
import { useLogout } from '~/entities/user/api/useLogout'

interface Props {
    className?: string
}

export const SignOutButton: React.FC<Props> = ({ className }) => {

    const { logout } = useLogout()

    return (
        <OptionsAlertDialog title='Вы уверены?' action='Выйти' onConfirm={logout}><div className='flex flex-row p-1 gap-4 min-h-8 transition duration-200 cursor-pointer hover:bg-gray-100 rounded-xl '>
            <SignOutIcon className='text-[#EF4444]' />
            <span className='text-xs sm:text-sm md:text-base font-semibold text-[#EF4444] px-4'>Выйти из профиля</span>
        </div></OptionsAlertDialog>
    )
}
