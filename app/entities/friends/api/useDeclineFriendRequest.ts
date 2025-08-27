import { useMutation, useQueryClient } from "@tanstack/react-query"
import { friendsService } from "../model/friends.service"
import { toast } from "sonner"
import { useMemo } from "react"

export const useDeclineFriendRequest = () => {
    const queryClient = useQueryClient()

    const { mutate: decline, isPending: isRequestDeclining } = useMutation({
        mutationKey: ['decline friend request'],
        mutationFn: (requestId: string) =>
            friendsService.declineFriendRequest(requestId),
        onSuccess(data) {
            queryClient.invalidateQueries({
                queryKey: ['incoming friend requests']
            })
            toast.success("Заявка отклонена")
        },
        onError(error) {
            toast.error("Ошибка при отклонении друга. Попробуйте позже :( ")
            if (error.message) {
                console.log(error.message)
            } else {
                console.log("Ошибка при отклонении друга")
            }
        }
    })

    return useMemo(
        () => ({
            decline,
            isRequestDeclining
        }),
        [decline, isRequestDeclining]
    )
}