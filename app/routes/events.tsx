import { EventsPage } from "~/pages/Events";
import type { Route } from "./+types/events";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Events" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    return params
}

export default function Events({ loaderData }: Route.ComponentProps) {
    return <EventsPage userId={loaderData.userId} />

}