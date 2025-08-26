import React from 'react'
import { Link } from 'react-router'
import { useProfile } from '~/entities/auth/api/useProfile'
import { EventItem } from '~/entities/event/ui/event-item'
import { useGetFriendsEvents } from '~/entities/friends/api/useGetFriendsEvents'
import { UserAvatar } from '~/entities/user/ui/user-avatar'
import { PUBLIC_URL } from '~/shared/config/url.config'
import { Separator } from '~/shared/ui/shadcn/separator'
import { Spinner } from '~/shared/ui/spinner'
import { Title } from '~/shared/ui/title'

interface Props {
    className?: string
}

export const FeedPage: React.FC<Props> = ({ className }) => {
    const { user } = useProfile()
    const { friendsEvents, isFriendsEventsLoading } = useGetFriendsEvents(user ? user?.id : "")



    return (
        <div className={'flex flex-col w-full gap-4 '}>
            <Title text={"Ближайшие события друзей"} />
            {isFriendsEventsLoading && <Spinner />}
            {friendsEvents?.length == 0 && <span className='font-inter text-xl font-semibold text-center mx-auto mt-6'>Ничего не найдено🙁</span>}

            <div className='flex flex-col gap-4 w-full'>
                {friendsEvents?.map((event, index) => (
                    <div className='flex flex-col w-full gap-3 '>
                        <Link to={PUBLIC_URL.profile(event.user.username)} className='flex items-center gap-2 w-fit group'>
                            <UserAvatar src={event.user.avatar} className='w-[30px] h-[30px]' />
                            <span className='font-open-sans font-bold text-base transition duration-200 group-hover:text-[#C084FC]'>{event.user.name}</span>
                        </Link>
                        <EventItem eventData={event} key={index} />
                        {index !== (friendsEvents.length - 1) && <Separator />}
                    </div>

                ))}
            </div>

        </div>
    )
}
