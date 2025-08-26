import React from 'react'
import { Link } from 'react-router'
import { useGetIncomingFriendRequests } from '~/entities/friends/api/useGetIncomingFriendRequests'
import { useGetOutgoingFriendRequests } from '~/entities/friends/api/useGetOutgoingFriendRequests'
import type { IUser } from '~/entities/user/model/user.types'
import { useAuthStore } from '~/shared/store/authStore'
import { CustomButton } from '~/shared/ui/custom-button'
import { FriendsTabs } from '~/shared/ui/friends-tabs'

import { Title } from '~/shared/ui/title'

interface Props {
    className?: string,
    friends: IUser[],
    userData: IUser,
}

export const FriendsPage: React.FC<Props> = ({ className, friends, userData }) => {

    const { incomingRequests } = useGetIncomingFriendRequests(userData.id)
    const { outgoingRequests } = useGetOutgoingFriendRequests(userData.id)

    const { setCurrentUser, user } = useAuthStore()

    React.useEffect(() => {
        setCurrentUser(userData)
    }, [])

    const isSameUser = user?.id === userData.id

    return (
        <div className={'flex flex-col w-full'}>
            <div className='flex items-center mb-3'>
                <Title text={`Друзья ${userData.name}`} />
                {isSameUser && <CustomButton asChild variant='purpleOutline'>
                    <Link to={'/friends/find'}>
                        Добавить
                    </Link>
                </CustomButton>}

            </div>

            <FriendsTabs isSameUser={isSameUser} friends={friends} outgoingRequests={outgoingRequests} incomingRequests={incomingRequests} />
        </div>
    )
}
