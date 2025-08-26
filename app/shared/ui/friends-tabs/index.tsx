import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../shadcn/tabs'
import { FriendCard } from '~/entities/friends/ui/friend-card'
import type { IUser } from '~/entities/user/model/user.types'
import type { IIncomingFriendRequests, IOutgoingFriendRequests } from '~/entities/friends/model/friends.types'

interface Props {
    className?: string,
    friends: IUser[],
    outgoingRequests: IOutgoingFriendRequests[] | undefined,
    incomingRequests: IIncomingFriendRequests[] | undefined,
    isSameUser: boolean
}

export const FriendsTabs: React.FC<Props> = ({ className, friends, incomingRequests, outgoingRequests, isSameUser }) => {
    return (
        <Tabs defaultValue='friends'>
            <TabsList className='flex sm:gap-3'>
                <TabsTrigger className='cursor-pointer border-[#C084FC] text-[#C084FC] data-[state=active]:bg-[#C084FC] data-[state=active]:text-white w-full' value='friends'>
                    Друзья
                    <span>{friends?.length}</span>
                </TabsTrigger>
                {isSameUser && <TabsTrigger className='cursor-pointer border-[#C084FC] text-[#C084FC] data-[state=active]:bg-[#C084FC] data-[state=active]:text-white w-full' value='incoming'>
                    Входящие
                    <span>{incomingRequests?.length}</span>
                </TabsTrigger>}
                {isSameUser && <TabsTrigger className='cursor-pointer border-[#C084FC] text-[#C084FC] data-[state=active]:bg-[#C084FC] data-[state=active]:text-white w-full' value='outgoing'>
                    Исходящие
                    <span>{outgoingRequests?.length}</span>
                </TabsTrigger>}
            </TabsList>
            <TabsContent value='friends'>
                <div className='flex flex-wrap justify-between gap-4 '>
                    {friends.map((friend, index) => (
                        <FriendCard key={index} userData={friend} />
                    ))}
                    {friends?.length == 0 && <span className='font-inter text-xl font-semibold text-center mx-auto mt-6'>Тут еще нет друзей🙁</span>}
                </div>

            </TabsContent>
            {isSameUser && <TabsContent value='incoming'>
                <div className='flex flex-wrap justify-between gap-4 '>
                    {incomingRequests?.map((request, index) => (
                        <FriendCard key={index} userData={request.sender} />
                    ))}
                    {incomingRequests?.length == 0 && <span className='font-inter text-xl font-semibold text-center mx-auto mt-6'>Тут еще нет входящих заявок🙁</span>}
                </div>

            </TabsContent>}
            {isSameUser && <TabsContent value='outgoing'>
                <div className='flex flex-wrap justify-between gap-4 '>
                    {outgoingRequests?.map((request, index) => (
                        <FriendCard key={index} userData={request.receiver} />
                    ))}
                    {outgoingRequests?.length == 0 && <span className='font-inter text-xl font-semibold text-center mx-auto mt-6'>Тут еще нет отправленных заявок🙁</span>}
                </div>

            </TabsContent>}
        </Tabs>
    )
}
