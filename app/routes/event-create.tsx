import { CreateEventPage } from "~/pages/Events/ui/CreateEvent";
import type { Route } from "./+types/event-create";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Events" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function EventCreate() {
    return <CreateEventPage />
}