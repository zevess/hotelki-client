import { EventsPage } from "~/pages/events";
import { EventEditPage } from "~/pages/events/ui/event-edit";
import type { Route } from "./+types/event-edit";
import { eventService } from "~/entities/event/event.service";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Редактировать событие" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function EventsEdit({ loaderData }: Route.ComponentProps) {
    return <EventEditPage />
}