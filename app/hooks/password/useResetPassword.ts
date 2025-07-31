import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useMemo } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { authService } from "~/entities/auth/auth.service"
import { PUBLIC_URL } from "~/lib/config/url.config"
import { useAuthStore } from "~/lib/store/authStore"

export const useResetPassword = () => {
    const navigate = useNavigate()
    const { setUser, setCurrentUser } = useAuthStore()

    const { mutate: resetPassword, isPending: isPasswordReseting, error: resetPasswordError, } = useMutation({
        mutationKey: ['reset password'],
        mutationFn: (email: string) =>
            authService.resetPassword(email),
        onSuccess(data) {
            toast.success("Пожалуйста, проверьте свою почту")
        },
        onError(error) {
            if (axios.isAxiosError(error)) {
                console.log(error)
                error.response && toast.error(error.response?.data.message)
            } else {
                console.log("Ошибка при сбросе пароля")
            }
        },
    })

    return useMemo(
        () => ({
            resetPassword,
            isPasswordReseting,
            resetPasswordError,
        }),
        [resetPassword, isPasswordReseting, resetPasswordError,]
    )
}