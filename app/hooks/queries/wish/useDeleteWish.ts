import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMemo } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { eventService } from "~/entities/event/event.service"
import type { IEvent } from "~/entities/event/event.types"
import { wishService } from "~/entities/wish/wish.service"
import { PUBLIC_URL } from "~/lib/config/url.config"

export const useDeleteWish = () => {
    const navigate = useNavigate()

    const queryClient = useQueryClient()

    const { mutate: deleteWish, isPending: isWishDeleting } = useMutation({
        mutationKey: ['delete wish'],
        mutationFn: (eventId: string) =>
            wishService.delete(eventId),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['get wishes by user']
            })
            toast.success("Хотелка удалена")
        },
        onError(error) {
            if (error.message) {
                console.log(error.message)
            } else {
                console.log("Ошибка при удалении хотелки")
            }
        }
    })
    return useMemo(
        () => ({
            deleteWish,
            isWishDeleting
        }),
        [deleteWish, isWishDeleting]
    )

}