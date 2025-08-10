import { useMutation } from "@tanstack/react-query"
import { useMemo } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"

import { PUBLIC_URL } from "~/shared/config/url.config"
import type { IEvent } from "../model/event.types"
import { eventService } from "../model/event.service"


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
            toast.error("Ошибка при обновлении события. Попробуйте позже :( ")
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