import React from 'react'
import { cn } from '~/shared/lib/utils'
import type { IUser } from '~/entities/user/model/user.types'
import { ProfileEditButton } from '~/shared/ui/profile-edit-button'
import { EventIcon } from '~/shared/ui/event-icon'
import { useAuthStore } from '~/shared/store/authStore'
import { useGetUserEvents } from '~/entities/event/api/useGetUserEvents'
import { Link } from 'react-router'
import { BadgeCheck } from 'lucide-react'
import { APP_URL, PUBLIC_URL } from '~/shared/config/url.config'
import { FriendButton } from '~/features/friend/ui/friend-button'
import { useGetFriends } from '~/entities/friends/api/useGetFriends'
import { UserAvatar } from '~/entities/user/ui/user-avatar'
import { InFriendsIcon } from '~/features/friend/ui/in-friends-icon'
import { CopyToClipboard } from '~/shared/ui/copy-to-clipboard'


interface Props {
    className?: string,
    userData: IUser,
}

export const ProfilePage: React.FC<Props> = ({ className, userData }) => {

    const { user } = useAuthStore()
    const { events } = useGetUserEvents(userData?.id)
    const { friends } = useGetFriends(userData.id)

    const { setCurrentUser } = useAuthStore()

    React.useEffect(() => {
        setCurrentUser(userData)
    }, [])

    const isSameUser = user?.id === userData?.id
    const isFriend = friends?.some(obj => obj.id === user?.id)

    return (
        <div className={cn('w-full ', className)}>
            <div className='flex items-center gap-4'>
                <UserAvatar src={userData.avatar} />
                <div className='flex flex-col'>
                    <div className='flex items-center font-open-sans font-bold text-base sm:text-lg md:text-xl'>
                        {isSameUser && "Привет,"} {userData?.name} {userData?.isVerified && <BadgeCheck size={'25'} className='flex-shrink-0' />}
                    </div>
                    <span className='font-open-sans font-bold text-base text-gray-600'>@{userData?.username}</span>
                </div>
                <div className='flex items-center flex-row gap-2'>
                    {isFriend && <InFriendsIcon friendId={userData.id} />}

                    {(user && isSameUser) && <ProfileEditButton />}
                    <CopyToClipboard textToCopy={`${APP_URL}/${PUBLIC_URL.profile(userData.username)}`} />
                </div>

            </div>

            {!isSameUser && <FriendButton isFriend={isFriend} className='mt-4' userData={userData} />}

            <div className='mt-10 flex flex-col md:w-[346px]'>
                <div className='flex justify-between items-center'>
                    <span className='font-open-sans font-bold text-xl'>События</span>
                    <Link to={PUBLIC_URL.events(userData?.username)} className='font-open-sans text-base font-normal hover:text-[#C084FC]'>Посмотреть все</Link>
                </div>

                <div className='flex flex-wrap gap-3 mt-[3px]'>
                    {isSameUser && <EventIcon variant='create' />}
                    {events?.slice(0, 3).map((item, index) => (
                        <EventIcon eventSlug={item.slug} username={userData.username} userId={userData?.id} key={index} variant='event' emoji={item.emoji} title={item.title} />
                    ))}
                </div>
            </div>
        </div>
    )
}
