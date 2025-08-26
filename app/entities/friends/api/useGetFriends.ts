import { useQuery } from "@tanstack/react-query"
import { friendsService } from "../model/friends.service"
import { useMemo } from "react"

export const useGetFriends = (userId: string) => {
    const { data: friends, isPending: isFriendsLoading } = useQuery({
        queryKey: ['get friends'],
        queryFn: () => friendsService.getFriends(userId),
    })

    return useMemo(
        () => ({
            friends,
            isFriendsLoading
        }),
        [friends, isFriendsLoading]
    )
}