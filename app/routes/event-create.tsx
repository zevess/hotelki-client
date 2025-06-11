import { EventCreatePage } from "~/pages/Events/ui/EventCreate";
import type { Route } from "./+types/event-create";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Events" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function EventCreate() {
    return <EventCreatePage />
}