import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMemo } from "react"
import { toast } from "sonner"
import { eventService } from "../model/event.service"

export const useDeleteEvent = () => {

    const queryClient = useQueryClient()

    const { mutate: deleteEvent, isPending: isEventDeleting } = useMutation({
        mutationKey: ['delete event'],
        mutationFn: (eventId: string) =>
            eventService.delete(eventId),
        onSuccess() {
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