import { useMutation, useQueryClient } from "@tanstack/react-query"
import { friendsService } from "../model/friends.service"
import { toast } from "sonner"
import { useMemo } from "react"

export const useAcceptFriendRequest = () => {
    const queryClient = useQueryClient()

    const { mutate: accept, isPending: isRequestAccepting, isSuccess: isRequestAccepted } = useMutation({
        mutationKey: ['accept friend request'],
        mutationFn: (requestId: string) =>
            friendsService.acceptFriendRequest(requestId),
        onSuccess(data) {
            console.log(data)
            queryClient.invalidateQueries({
                queryKey: ['get friends']
            })
            toast.success("Заявка принята")
        },
        onError(error) {
            toast.error("Ошибка при принятии друга. Попробуйте позже :( ")
            if (error.message) {
                console.log(error.message)
            } else {
                console.log("Ошибка при принятии друга")
            }
        }
    })

    return useMemo(
        () => ({
            accept,
            isRequestAccepting, isRequestAccepted
        }),
        [accept, isRequestAccepting, isRequestAccepted]
    )
}