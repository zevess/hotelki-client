import { EventEditPage } from "~/pages/event-edit";
import type { Route } from "./+types/event-edit";



export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Редактировать событие" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function EventsEdit({ loaderData }: Route.ComponentProps) {
    return <EventEditPage />
}