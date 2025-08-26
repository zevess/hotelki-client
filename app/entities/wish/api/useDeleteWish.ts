import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMemo } from "react"
import { toast } from "sonner"
import { wishService } from "../model/wish.service"
import { useNavigate } from "react-router"
import { PUBLIC_URL } from "~/shared/config/url.config"


export const useDeleteWish = (type: "list" | 'edit') => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const { mutate: deleteWish, isPending: isWishDeleting } = useMutation({
        mutationKey: ['delete wish'],
        mutationFn: (eventId: string) =>
            wishService.delete(eventId),
        onSuccess(data) {
            queryClient.invalidateQueries({
                queryKey: ['get wishes by user']
            })

            queryClient.invalidateQueries({
                queryKey: ['get wishes by user and event slug']
            })

            if(type == 'edit'){
                navigate(PUBLIC_URL.wishes(data.data.user.username))
            }

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