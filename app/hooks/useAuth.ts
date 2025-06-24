import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import { authService } from "~/entities/auth/auth.service"
import type { IAuth } from "~/entities/auth/auth.types"

import { useMemo, useState } from "react"
import type { IUser } from "~/entities/user/user.types"

export const useAuth = (isRegister: boolean) => {

    const navigate = useNavigate()

    
    const { mutate: auth, isPending: isAuthLoading } = useMutation({
        mutationKey: ['auth user'],
        mutationFn: (data: IAuth) =>
            authService.main(isRegister ? "register" : 'login', data),
        onSuccess(data) {
            navigate(`/profile/${data.data.user.id}`)
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