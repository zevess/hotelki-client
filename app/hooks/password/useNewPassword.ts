import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useMemo } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { authService } from "~/entities/auth/auth.service"
import type { IResetPassword } from "~/entities/auth/auth.types"
import { PUBLIC_URL } from "~/lib/config/url.config"
import { useAuthStore } from "~/lib/store/authStore"

export const useNewPassword = () => {
    const navigate = useNavigate()

    const { mutate: setNewPassword, isPending: isNewPasswordSetting, error: newPasswordError, } = useMutation({
        mutationKey: ['new password'],
        mutationFn: ({ token, password }: IResetPassword) =>
            authService.newPassword(token, password),
        onSuccess(data) {
            toast.success("Пароль успешно изменен. Выполните повторный вход")
            navigate(PUBLIC_URL.auth())
        },
        onError(error) {
            if (axios.isAxiosError(error)) {
                console.log(error)
                error.response && toast.error(error.response?.data.message)
            } else {
                console.log("Ошибка при обновлении пароля")
            }
        },
    })

    return useMemo(
        () => ({
            setNewPassword,
            isNewPasswordSetting,
            newPasswordError,
        }),
        [setNewPassword, isNewPasswordSetting, newPasswordError,]
    )
}