import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import { authService } from "~/entities/auth/auth.service"
import type { IAuth } from "~/entities/auth/auth.types"

import { useMemo, useState } from "react"
import type { IUser, IUserUpdate } from "~/entities/user/user.types"
import { useAuthStore } from "~/lib/store/authStore"
import { PUBLIC_URL } from "~/lib/config/url.config"
import { userService } from "~/entities/user/user.service"

export const useEditUser = () => {

    const navigate = useNavigate()
    const { setUser, setCurrentUser } = useAuthStore()


    const { mutate: edit, isPending: isUserEditing } = useMutation({
        mutationKey: ['edit user'],
        mutationFn: (data: IUserUpdate) =>
            userService.editUser(data),
        onSuccess(data) {
            setUser(data.data)
            setCurrentUser(data.data)
            navigate(PUBLIC_URL.profile(data.data.id))
        },
        onError(error) {
            if (error.message) {
                console.log(error.message)
            } else {
                console.log("Ошибка при обновлении профиля")
            }
        }
    })

    return useMemo(
        () => ({
            edit,
            isUserEditing
        }),
        [edit, isUserEditing]
    )

}