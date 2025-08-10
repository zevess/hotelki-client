import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMemo } from "react"
import { toast } from "sonner"
import { wishService } from "../model/wish.service"


export const useDeleteWish = () => {

    const queryClient = useQueryClient()

    const { mutate: deleteWish, isPending: isWishDeleting } = useMutation({
        mutationKey: ['delete wish'],
        mutationFn: (eventId: string) =>
            wishService.delete(eventId),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['get wishes by user']
            })

            queryClient.invalidateQueries({
                queryKey: ['get wishes by user and event slug']
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