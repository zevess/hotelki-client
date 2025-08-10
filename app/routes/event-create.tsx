import { EventCreatePage } from "~/pages/event-create";
import type { Route } from "./+types/event-create";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Создать событие" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function EventCreate() {
    return <EventCreatePage />
}