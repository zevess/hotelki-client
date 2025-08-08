import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { wishService } from "~/entities/wish/wish.service"

export const useGetWishBySlug = (userId: string | undefined, slug: string | undefined) => {

    const { data: wishBySlug, isLoading } = useQuery({
        queryKey: ['get wish by user and slug'],
        queryFn: () => wishService.getByUserAndSlug(userId, slug)
    })

    return useMemo(
        () => ({
            wishBySlug, isLoading
        }),
        [wishBySlug, isLoading]
    )

}