import { useMutation } from "@tanstack/react-query"
import { useMemo } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { eventService } from "~/entities/event/event.service"
import type { IEvent } from "~/entities/event/event.types"
import { PUBLIC_URL } from "~/lib/config/url.config"

export const useUpdateEvent = (eventId: string) => {
    const navigate = useNavigate()

    const { mutate: updateEvent, isPending: isEvenUpdating } = useMutation({
        mutationKey: ['update event'],
        mutationFn: (data: IEvent) =>
            eventService.update(eventId, data),
        onSuccess(data) {
            navigate(PUBLIC_URL.events(data.data.userId))
            toast.success("Событие обновлено")
        },
        onError(error) {
            if (error.message) {
                console.log(error.message)
            } else {
                console.log("Ошибка при создании события")
            }
        }
    })
    return useMemo(
        () => ({
            updateEvent,
            isEvenUpdating
        }),
        [updateEvent, isEvenUpdating]
    )

}