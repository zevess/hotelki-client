import { useMutation } from "@tanstack/react-query"
import { useMemo } from "react"
import { useNavigate } from "react-router"
import { eventService } from "~/entities/event/event.service"
import type { IEvent } from "~/entities/event/event.types"
import { wishService } from "~/entities/wish/wish.service"
import type { IWish } from "~/entities/wish/wish.types"
import { PUBLIC_URL } from "~/lib/config/url.config"

export const useCreateWish = () => {
    const navigate = useNavigate()

    const { mutate: createWish, isPending: isWishCreating } = useMutation({
        mutationKey: ['create wish'],
        mutationFn: (data: IWish) =>
            wishService.create(data),
        onSuccess(data) {
            navigate(PUBLIC_URL.wishes(data.data.userId))
        },
        onError(error) {
            if (error.message) {
                console.log(error.message)
            } else {
                console.log("Ошибка при создании события")
            }
        }
    })
    return useMemo(
        () => ({
            createWish,
            isWishCreating
        }),
        [createWish, isWishCreating]
    )

}