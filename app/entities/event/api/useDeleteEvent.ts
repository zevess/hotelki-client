import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMemo } from "react"
import { toast } from "sonner"
import { eventService } from "../model/event.service"
import { useNavigate } from "react-router"
import { PUBLIC_URL } from "~/shared/config/url.config"

export const useDeleteEvent = (type: "list" | 'edit') => {

    const queryClient = useQueryClient()
    const navigate = useNavigate()


    const { mutate: deleteEvent, isPending: isEventDeleting } = useMutation({
        mutationKey: ['delete event'],
        mutationFn: (eventId: string) =>
            eventService.delete(eventId),
        onSuccess(data) {
            console.log(data)

            if(type == 'edit'){
                navigate(PUBLIC_URL.events(data.data.user.username))
            }

            queryClient.invalidateQueries({
                queryKey: ['get events by user']
            })
            toast.success("Событие удалено")
        },
        onError(error) {
            if (error.message) {
                console.log(error.message)
            } else {
                console.log("Ошибка при удалении события")
            }
        }
    })
    return useMemo(
        () => ({
            deleteEvent,
            isEventDeleting
        }),
        [deleteEvent, isEventDeleting]
    )

}