import { useQuery } from "@tanstack/react-query"
import { userService } from "~/entities/user/user.service"
import { useAuthStore } from "~/lib/store/authStore"

export const useProfile = () => {

    const { setUser } = useAuthStore()

    const { data: user, isLoading } = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const data = await userService.getProfile()
            setUser(data)
            return data
        },
    })

    console.log("RENDER")

    return { user, isLoading }
}