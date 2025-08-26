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
        <OptionsAlertDialog title='Вы уверены?' action='Выйти' onConfirm={logout}>
            <div className='flex flex-row p-1 py-2 gap-4 min-h-8 my-1 hover:bg-gray-100 rounded-xl items-center transition duration-200 cursor-pointer'>
                <SignOutIcon className='text-[#EF4444]' />
                <span className='text-[#EF4444] font-inter font-semibold text-lg sm:text-sm md:text-base'>Выйти из профиля</span>
            </div>
        </OptionsAlertDialog>
    )
}
