import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useMemo } from "react"
import { toast } from "sonner"
import { authService } from "~/entities/auth/model/auth.service"

export const useResetPassword = () => {

    const { mutate: resetPassword, isPending: isPasswordReseting, error: resetPasswordError, isSuccess } = useMutation({
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
            resetPasswordError, isSuccess
        }),
        [resetPassword, isPasswordReseting, resetPasswordError, isSuccess]
    )
}