import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { wishService } from "../model/wish.service"

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