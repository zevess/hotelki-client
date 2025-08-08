import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { eventService } from "~/entities/event/event.service"
import { userService } from "~/entities/user/user.service"
import { wishService } from "~/entities/wish/wish.service"

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