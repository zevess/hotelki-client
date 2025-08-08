import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useMemo } from "react"
import { toast } from "sonner"
import { authService } from "~/entities/auth/auth.service"


export const useSendVerification = () => {
   
    const { mutate: sendVerification, isPending: isVerificationSending, error: sendingError } = useMutation({
        mutationKey: ['verify user'],
        mutationFn: (email: string) =>
            authService.sendVerification(email),
        onSuccess(data) {
            toast.success("Пожалуйста, проверьте свою почту")
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