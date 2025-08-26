import { useQuery } from "@tanstack/react-query"
import { friendsService } from "../model/friends.service"
import { useMemo } from "react"

export const useGetFriendsEvents = (userId: string) => {
    const { data: friendsEvents, isPending: isFriendsEventsLoading } = useQuery({
        queryKey: ['get friends events'],
        queryFn: () => friendsService.getFriendsEvents(userId),
    })

    return useMemo(
        () => ({
            friendsEvents,
            isFriendsEventsLoading
        }),
        [friendsEvents, isFriendsEventsLoading]
    )
}