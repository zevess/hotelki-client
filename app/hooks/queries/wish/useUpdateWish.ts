import { useMutation } from "@tanstack/react-query"
import { useMemo } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { eventService } from "~/entities/event/event.service"
import type { IEvent } from "~/entities/event/event.types"
import { wishService } from "~/entities/wish/wish.service"
import type { IWish } from "~/entities/wish/wish.types"
import { PUBLIC_URL } from "~/lib/config/url.config"

export const useUpdateWish = (wishId: string) => {
    const navigate = useNavigate()

    const { mutate: updateWish, isPending: isWishUpdating } = useMutation({
        mutationKey: ['update wish'],
        mutationFn: (data: IWish) =>
            wishService.update(data, wishId),
        onSuccess(data) {
            navigate(PUBLIC_URL.wishes(data.data.userId))
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