import { useQuery } from "@tanstack/react-query"
import { userService } from "~/entities/user/model/user.service"
import { useAuthStore } from "~/shared/store/authStore"

export const useProfile = () => {

    const { setUser } = useAuthStore()

    const { data: user, isLoading } = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            try {
                const data = await userService.getProfile()
                setUser(data)
                return data
            } catch (error) {
                setUser(null)
            }

        },
    })

    return { user, isLoading }
}