import { useMutation } from "@tanstack/react-query"
import { useMemo } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { PUBLIC_URL } from "~/shared/config/url.config"
import type { IWish } from "../model/wish.types"
import { wishService } from "../model/wish.service"

export const useCreateWish = () => {
    const navigate = useNavigate()

    const { mutate: createWish, isPending: isWishCreating } = useMutation({
        mutationKey: ['create wish'],
        mutationFn: (data: IWish) =>
            wishService.create(data),
        onSuccess(data) {
            navigate(PUBLIC_URL.wishes(data.data.user.username))
            toast.success("Хотелка создана")
        },
        onError(error) {

            toast.error("Ошибка при создании хотелки. Попробуйте позже :( ")

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