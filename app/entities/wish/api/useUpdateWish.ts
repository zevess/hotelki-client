import { useMutation } from "@tanstack/react-query"
import { useMemo } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { PUBLIC_URL } from "~/shared/config/url.config"
import type { IWish } from "../model/wish.types"
import { wishService } from "../model/wish.service"

export const useUpdateWish = (wishId: string) => {
    const navigate = useNavigate()

    const { mutate: updateWish, isPending: isWishUpdating } = useMutation({
        mutationKey: ['update wish'],
        mutationFn: (data: IWish) =>
            wishService.update(data, wishId),
        onSuccess(data) {
            navigate(PUBLIC_URL.wishes(data.data.user.username))
            toast.success("Хотелка обновлена")
        },
        onError(error) {
            toast.error("Ошибка при обновлении хотелки. Попробуйте позже :( ")
            if (error.message) {
                console.log(error.message)
            } else {
                console.log("Ошибка при обновлении хотелки")
            }
        }
    })
    return useMemo(
        () => ({
            updateWish,
            isWishUpdating
        }),
        [updateWish, isWishUpdating]
    )

}