import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import { authService } from "~/entities/auth/auth.service"
import type { IAuth } from "~/entities/auth/auth.types"

import { useMemo, useState } from "react"
import type { IUser } from "~/entities/user/user.types"
import { useAuthStore } from "~/lib/store/authStore"
import { PUBLIC_URL } from "~/lib/config/url.config"

export const useAuth = (isRegister: boolean) => {

    const navigate = useNavigate()
    const { setUser } = useAuthStore()

    const { mutate: auth, isPending: isAuthLoading } = useMutation({
        mutationKey: ['auth user'],
        mutationFn: (data: IAuth) =>
            authService.main(isRegister ? "register" : 'login', data),
        onSuccess(data) {
            setUser(data.data.user)
            navigate(PUBLIC_URL.profile(data.data.user.id))
        },
        onError(error) {
            if (error.message) {
                console.log(error.message)
            } else {
                console.log("Ошибка при авторизации")
            }
        }
    })

    return useMemo(
        () => ({
            auth,
            isAuthLoading
        }),
        [auth, isAuthLoading]
    )

}