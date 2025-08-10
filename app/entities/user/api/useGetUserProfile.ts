import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { userService } from "~/entities/user/model/user.service"

export const useGetUserProfile = (userId: string) => {

    const { data: userProfile, isLoading } = useQuery({
        queryKey: ['get user'],
        queryFn: () => userService.getUser(userId)
    })

    return useMemo(
        () => ({
            userProfile, isLoading
        }),
        [userProfile, isLoading]
    )

}