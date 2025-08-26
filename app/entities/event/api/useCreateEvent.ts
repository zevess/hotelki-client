import { useMutation } from "@tanstack/react-query"
import { useMemo } from "react"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { PUBLIC_URL } from "~/shared/config/url.config"
import type { IEvent } from "../model/event.types"
import { eventService } from "../model/event.service"

export const useCreateEvent = () => {
    const navigate = useNavigate()

    const { mutate: createEvent, isPending: isEventCreating } = useMutation({
        mutationKey: ['create event'],
        mutationFn: (data: IEvent) =>
            eventService.create(data),
        onSuccess(data) {
            navigate(PUBLIC_URL.events(data.data.user.username))
            toast.success("Событие создано")
        },
        onError(error) {
            toast.error("Ошибка при создании события. Попробуйте позже :( ")
            if (error.message) {
                console.log(error.message)
            } else {
                console.log("Ошибка при создании события")
            }
        }
    })
    return useMemo(
        () => ({
            createEvent,
            isEventCreating
        }),
        [createEvent, isEventCreating]
    )

}