import { useMutation, useQueryClient } from "@tanstack/react-query"
import { friendsService } from "../model/friends.service"
import { toast } from "sonner"
import { useMemo } from "react"

export const useDeleteFriend = () => {
    const queryClient = useQueryClient()

    const { mutate: deleteFriend, isPending: isFriednDeleting } = useMutation({
        mutationKey: ['delete friend'],
        mutationFn: (friendId: string) =>
            friendsService.deleteFriend(friendId),
        onSuccess(data) {
            queryClient.invalidateQueries({
                queryKey: ['get friends']
            })
            toast.success("Друг удален")
        },
        onError(error) {
            toast.error("Ошибка при удалении друга. Попробуйте позже :( ")
            if (error.message) {
                console.log(error.message)
            } else {
                console.log("Ошибка при удалении друга")
            }
        }
    })

    return useMemo(
        () => ({
            deleteFriend,
            isFriednDeleting
        }),
        [deleteFriend, isFriednDeleting]
    )
}