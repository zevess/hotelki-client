import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { eventService } from "~/entities/event/event.service"
import { wishService } from "~/entities/wish/wish.service"

export const useGetWishes = (userId: string | undefined) => {

    const { data: wishes, isLoading } = useQuery({
        queryKey: ['get wishes by user'],
        queryFn: () => wishService.getByUser(userId)
    })

    return useMemo(
        () => ({
            wishes, isLoading
        }),
        [wishes, isLoading]
    )

}