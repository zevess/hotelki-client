import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { eventService } from "~/entities/event/event.service"

export const useGetEvent = (eventId: string | undefined) => {

    const { data: event, isLoading } = useQuery({
        queryKey: ['get event by id'],
        queryFn: () => eventService.getById(eventId)
    })

    return useMemo(
        () => ({
            event, isLoading
        }),
        [event, isLoading]
    )

}