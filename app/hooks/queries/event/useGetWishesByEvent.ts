import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { eventService } from "~/entities/event/event.service"

export const useGetWishesByEvent = (userId: string | undefined, slug: string | undefined) => {

    const { data: wishesByEventSlug, isLoading } = useQuery({
        queryKey: ['get wishes by user and event slug'],
        queryFn: () => eventService.getByUserAndSlug(userId, slug)
    })

    return useMemo(
        () => ({
            wishesByEventSlug, isLoading
        }),
        [wishesByEventSlug, isLoading]
    )

}