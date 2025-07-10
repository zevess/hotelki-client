import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMemo } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { eventService } from "~/entities/event/event.service"
import type { IEvent } from "~/entities/event/event.types"
import { PUBLIC_URL } from "~/lib/config/url.config"

export const useDeleteEvent = () => {
    const navigate = useNavigate()

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
            // navigate(PUBLIC_URL.events(data.data.userId))
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