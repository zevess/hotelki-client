import { useMutation } from "@tanstack/react-query"
import { friendsService } from "../model/friends.service"
import { toast } from "sonner"
import { useMemo } from "react"

export const useSendFriendRequest = () => {
    const { mutate: send, isPending: isRequestSending, isSuccess } = useMutation({
        mutationKey: ['send friend request'],
        mutationFn: (receiverId: string) =>
            friendsService.sendFriendRequest(receiverId),
        onSuccess(data) {
            toast.success("Заявка в друзья отправлена!")
        },
        onError(error) {
            toast.error("Ошибка при добавлении в друзья. Попробуйте позже :( ")
            if (error.message) {
                console.log(error.message)
            } else {
                console.log("Ошибка при добавлении в друзья")
            }
        }
    })

    return useMemo(
        () => ({
            send,
            isRequestSending,
            isSuccess
        }),
        [send, isRequestSending, isSuccess]
    )
}