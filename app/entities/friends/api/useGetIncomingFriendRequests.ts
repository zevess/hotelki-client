import { useQuery } from "@tanstack/react-query"
import { friendsService } from "../model/friends.service"
import { useMemo } from "react"

export const useGetIncomingFriendRequests = (userId: string) => {
    const { data: incomingRequests, isPending: isFriendsLoading } = useQuery({
        queryKey: ['incoming friend requests'],
        queryFn: () => friendsService.getIncomingFriendRequests(userId),
    })

    return useMemo(
        () => ({
            incomingRequests,
            isFriendsLoading
        }),
        [incomingRequests, isFriendsLoading]
    )
}