import { useQuery } from "@tanstack/react-query"
import { friendsService } from "../model/friends.service"
import { useMemo } from "react"

export const useGetOutgoingFriendRequests = (userId: string) => {
    const { data: outgoingRequests, isPending: isFriendsLoading } = useQuery({
        queryKey: ['outgoing friend requests'],
        queryFn: () => friendsService.getOutgoingFriendRequests(userId),
    })

    return useMemo(
        () => ({
            outgoingRequests,
            isFriendsLoading
        }),
        [outgoingRequests, isFriendsLoading]
    )
}