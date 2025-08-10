import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useMemo } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { authService } from "~/entities/auth/model/auth.service"
import { PUBLIC_URL } from "~/shared/config/url.config"
import { useAuthStore } from "~/shared/store/authStore"

export const useVerification = () => {
    const navigate = useNavigate()
    const { setUser, setCurrentUser } = useAuthStore()

    const { mutate: verify, isPending: isVerifying, error: verifyError } = useMutation({
        mutationKey: ['verify user'],
        mutationFn: (token: string) =>
            authService.verify(token),
        onSuccess(data) {
            toast.success("Аккаунт успешно подтвержден")
            setUser(data.data.user)
            setCurrentUser(data.data.user)
            navigate(PUBLIC_URL.profile(data.data.user.id))
        },
        onError(error) {
            if (axios.isAxiosError(error)) {
                console.log(error)
                error.response && toast.error(error.response?.data.message)
            } else {
                console.log("Ошибка при подтверждении")
            }
        },
    })

    return useMemo(
        () => ({
            verify,
            isVerifying,
            verifyError
        }),
        [verify, isVerifying, verifyError]
    )
}