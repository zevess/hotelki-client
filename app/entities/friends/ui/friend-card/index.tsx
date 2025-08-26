import React from 'react'
import { Link } from 'react-router'
import type { IUser } from '~/entities/user/model/user.types'
import { UserAvatar } from '~/entities/user/ui/user-avatar'

interface Props {
    className?: string,
    userData: IUser
}

export const FriendCard: React.FC<Props> = ({ className, userData }) => {
    return (
        <Link viewTransition to={`/profile/${userData.username}`} className='flex w-full xl:max-w-[420px] bg-white p-2 rounded-3xl cursor-pointer transition duration-200 border-2 border-transparent shadow-none hover:border-[#C084FC]'>

            <UserAvatar src={userData.avatar} />
            <div className='flex flex-col justify-center mr-3'>
                <span className='font-open-sans font-bold text-base'>{userData?.name} </span>
                <span className='font-open-sans font-bold text-xs text-gray-600'>@{userData?.username}</span>
            </div>

        </Link>

    )
}
