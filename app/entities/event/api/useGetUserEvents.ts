import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { eventService } from "../model/event.service"


export const useGetUserEvents = (userId: string | undefined) => {

    const { data: events, isLoading } = useQuery({
        queryKey: ['get events by user'],
        queryFn: () => eventService.getByUser(userId)
    })

    return useMemo(
        () => ({
            events, isLoading
        }),
        [events, isLoading]
    )

}