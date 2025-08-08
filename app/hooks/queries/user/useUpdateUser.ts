import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import { useMemo} from "react"
import type { IUserUpdate } from "~/entities/user/user.types"
import { useAuthStore } from "~/lib/store/authStore"
import { PUBLIC_URL } from "~/lib/config/url.config"
import { userService } from "~/entities/user/user.service"
import { toast } from "sonner"


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
            navigate(PUBLIC_URL.profile(data.data.id))
            toast.success("Профиль обновлён")
        },
        onError(error) {
            toast.error("Ошибка при обновлении профиля. Попробуйте позже :( ")

            if (error.message) {
                console.log(error.message)
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