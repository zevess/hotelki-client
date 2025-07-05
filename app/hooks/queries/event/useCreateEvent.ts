import { useMutation } from "@tanstack/react-query"
import { useMemo } from "react"
import { useNavigate } from "react-router"
import { eventService } from "~/entities/event/event.service"
import type { IEvent } from "~/entities/event/event.types"
import { PUBLIC_URL } from "~/lib/config/url.config"

export const useCreateEvent = () => {
    const navigate = useNavigate()

    const { mutate: createEvent, isPending: isEventCreating } = useMutation({
        mutationKey: ['create event'],
        mutationFn: (data: IEvent) =>
            eventService.create(data),
        onSuccess(data) {
            navigate(PUBLIC_URL.wishes(data.data.userId))
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
            createEvent,
            isEventCreating
        }),
        [createEvent, isEventCreating]
    )

}