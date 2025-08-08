import React from 'react'
import { Avatar, AvatarImage } from '~/components/ui/avatar'
import { cn } from '~/lib/utils'
import type { IUser } from '~/entities/user/user.types'
import { PUBLIC_URL } from '~/lib/config/url.config'
import { ProfileEditButton } from '~/components/profile-edit-button'
import { EventIcon } from '~/features/event/ui/event-icon'
import { useAuthStore } from '~/lib/store/authStore'
import { useGetUserEvents } from '~/hooks/queries/event/useGetUserEvents'
import { Link } from 'react-router'
import { BadgeCheck } from 'lucide-react'


interface Props {
    className?: string,
    userData: IUser | null,
}

export const ProfilePage: React.FC<Props> = ({ className, userData }) => {

    const { user } = useAuthStore()
    const { events } = useGetUserEvents(userData?.id)
    const { setCurrentUser } = useAuthStore()

    React.useEffect(() => {
        setCurrentUser(userData)
    }, [])

    const isSameUser = user?.id === userData?.id

    return (
        <div className={cn('w-full md:w-[346px]', className)}>
            <div className='flex items-center'>
                <Avatar className='w-[56px] h-[56px] mr-6'>
                    <AvatarImage src={userData?.avatar || 'https://github.com/zevess.png '} />
                </Avatar>
                <div>
                    <div className='flex items-center'>
                        <span className='font-open-sans font-bold text-xl'>{isSameUser && "Привет,"} {userData?.name} </span>
                        {userData?.isVerified && <BadgeCheck className='mx-1.5' size={'20px'}/> }
                    </div>

                    {(user && isSameUser) && <ProfileEditButton />}
                </div>
            </div>
            <div className='mt-10 flex flex-col'>
                <div className='flex justify-between items-center'>
                    <span className='font-open-sans font-bold text-xl'>События</span>
                    <Link to={PUBLIC_URL.events(userData?.id)} className='font-open-sans text-base font-normal hover:text-[#C084FC]'>Посмотреть все</Link>
                </div>

                <div className='flex flex-wrap gap-3 mt-[3px]'>
                    {isSameUser && <EventIcon variant='create' />}
                    {events?.slice(0, 3).map((item, index) => (
                        <EventIcon eventSlug={item.slug} userId={userData?.id} key={index} variant='event' emoji={item.emoji} title={item.title} />
                    ))}
                </div>
            </div>
        </div>
    )
}
