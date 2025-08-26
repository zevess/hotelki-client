import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { userService } from "~/entities/user/model/user.service"

export const useFindUser = (slug: string) => {

    const { data: users, isLoading } = useQuery({
        queryKey: ['find users', slug],
        queryFn: () => {
            if (!slug || slug.trim().length === 0) {
                return []
            }
            return userService.findUser(slug)
        },
        enabled: !!slug && slug.trim().length > 0
    })

    return useMemo(
        () => ({
            users: users || [], isLoading
        }),
        [users, isLoading]
    )

}