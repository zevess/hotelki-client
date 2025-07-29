import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useMemo } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { authService } from "~/entities/auth/auth.service"
import { PUBLIC_URL } from "~/lib/config/url.config"
import { useAuthStore } from "~/lib/store/authStore"

export const useSendVerification = () => {
    const navigate = useNavigate()
    const { setUser, setCurrentUser } = useAuthStore()

    const { mutate: sendVerification, isPending: isVerificationSending, error: sendingError } = useMutation({
        mutationKey: ['verify user'],
        mutationFn: (email: string) =>
            authService.sendVerification(email),
        onSuccess(data) {
            toast.success("Пожалуйста, проверьте свою почту")
            // setUser(data.data.user)
            // setCurrentUser(data.data.user)
            // navigate(PUBLIC_URL.profile(data.data.user.id))
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
            sendVerification,
            isVerificationSending,
            sendingError
        }),
        [sendVerification, isVerificationSending, sendingError]
    )
}