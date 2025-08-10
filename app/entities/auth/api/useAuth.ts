import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router"

import { useMemo} from "react"
import { useAuthStore } from "~/shared/store/authStore"

import { toast } from "sonner"
import axios from "axios"
import { PUBLIC_URL } from "~/shared/config/url.config"
import type { IAuth } from "../model/auth.types"
import { authService } from "../model/auth.service"


export const useAuth = (isRegister: boolean) => {

    const navigate = useNavigate()
    const { setUser, setCurrentUser } = useAuthStore()

    const { mutate: auth, isPending: isAuthLoading, error: authError, isSuccess, data: createdUser } = useMutation({
        mutationKey: ['auth user'],
        mutationFn: (data: IAuth) =>
            authService.main(isRegister ? "register" : 'login', data),
        onSuccess(data) {
            console.log(data)
            setUser(data.data.user)
            setCurrentUser(data.data.user)
            navigate(PUBLIC_URL.profile(data.data.user.id))
        },
        onError(error) {
            if (axios.isAxiosError(error)) {
                console.log(error)
                error.response && toast.error(error.response?.data.message)
            } else {
                console.log("Ошибка при авторизации")
            }
        },
    })

    return useMemo(
        () => ({
            auth,
            isAuthLoading,
            authError, isSuccess, createdUser
        }),
        [auth, isAuthLoading, authError, isSuccess, createdUser]
    )

}