import React from 'react'
import { CustomButton } from '../../../../shared/ui/custom-button'
import { useSendFriendRequest } from '~/entities/friends/api/useSendFriendRequest'
import { useGetOutgoingFriendRequests } from '~/entities/friends/api/useGetOutgoingFriendRequests'
import { useGetIncomingFriendRequests } from '~/entities/friends/api/useGetIncomingFriendRequests'
import { useAcceptFriendRequest } from '~/entities/friends/api/useAcceptFriendRequest'
import { useDeclineFriendRequest } from '~/entities/friends/api/useDeclineFriendRequest'
import type { IUser } from '~/entities/user/model/user.types'
import { useAuthStore } from '~/shared/store/authStore'

interface Props {
    className?: string,
    userData: IUser,
    isFriend: boolean | undefined
}

export const FriendButton: React.FC<Props> = ({ className, userData, isFriend }) => {

    const { user } = useAuthStore()

    const { send, isSuccess } = useSendFriendRequest()
    const { accept, isRequestAccepted } = useAcceptFriendRequest()
    const { decline } = useDeclineFriendRequest()
    const { outgoingRequests } = useGetOutgoingFriendRequests(String(user?.id))
    const { incomingRequests } = useGetIncomingFriendRequests(String(user?.id))

    const isRequestSended = outgoingRequests?.some(obj => obj.receiverId === userData.id)

    const isIncomingRequest = incomingRequests?.some(obj => obj.senderId === userData.id)
    const incomingRequestData = incomingRequests?.find(obj => obj.senderId === userData.id)

    console.log(outgoingRequests)

    return (
        <div>
            {(!isFriend && !isIncomingRequest) &&
                <CustomButton className={className} disabled={isSuccess || isRequestSended}
                    onClick={
                        () => send(userData.id)
                    } variant='purple'>
                    {isRequestSended ? "Заявка отправлена" : "Добавить в друзья"}
                </CustomButton>
            }

            {(isIncomingRequest && !isRequestAccepted) &&
                <div className='flex flex-wrap gap-4'>
                    <CustomButton className={className}
                        onClick={() => accept(String(incomingRequestData?.id))} variant='purple'>
                        Принять заявку
                    </CustomButton>
                    <CustomButton className={className}
                        onClick={() => decline(String(incomingRequestData?.id))} variant='redOutline'>
                        Отклонить заявку
                    </CustomButton>
                </div>

            }
        </div>

    )
}
