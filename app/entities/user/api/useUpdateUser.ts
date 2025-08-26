import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import { useMemo } from "react"
import type { IUserUpdate } from "~/entities/user/model/user.types"
import { useAuthStore } from "~/shared/store/authStore"
import { userService } from "~/entities/user/model/user.service"
import { toast } from "sonner"
import { PUBLIC_URL } from "~/shared/config/url.config"
import axios from "axios"

export const useUpdateUser = () => {

    const navigate = useNavigate()
    const { setUser, setCurrentUser } = useAuthStore()


    const { mutate: update, isPending: isUserUpdating } = useMutation({
        mutationKey: ['update user'],
        mutationFn: (data: IUserUpdate) =>
            userService.updateUser(data),
        onSuccess(data) {
            setUser(data.data)
            setCurrentUser(data.data)
            navigate(PUBLIC_URL.profile(data.data.username))
            toast.success("Профиль обновлён")
        },
        onError(error) {
            console.log(error)
            // toast.error("Ошибка при обновлении профиля. Попробуйте позже :( ")
            if (axios.isAxiosError(error)) {
                console.log(error)
                error.response && toast.error(error.response?.data.message)
            } else {
                console.log("Ошибка при обновлении профиля")
            }
        }
    })

    return useMemo(
        () => ({
            update,
            isUserUpdating
        }),
        [update, isUserUpdating]
    )

}