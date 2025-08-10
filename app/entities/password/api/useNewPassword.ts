import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useMemo } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { PUBLIC_URL } from "~/shared/config/url.config"
import type { IResetPassword } from "../model/password.types"
import { authService } from "~/entities/auth/model/auth.service"


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