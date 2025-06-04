import { EventsPage } from "~/pages/Events";
import type { Route } from "./+types/events";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Events" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return <EventsPage />
}