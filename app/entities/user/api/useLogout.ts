import { useMutation } from "@tanstack/react-query"
import { useMemo } from "react"
import { useNavigate } from "react-router"
import { authService } from "~/entities/auth/model/auth.service"
import { PUBLIC_URL } from "~/shared/config/url.config"
import { useAuthStore } from "~/shared/store/authStore"

export const useLogout = () => {

    const { } = useAuthStore()
    const navigate = useNavigate()

    const { mutate: logout } = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(),
        onSuccess() {
            useAuthStore.setState({ user: null, currentUser: null })
            navigate(PUBLIC_URL.auth())
        }
    })
    return useMemo(
        () => ({
            logout
        }),
        [logout]
    )
}