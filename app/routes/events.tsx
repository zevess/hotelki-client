import { EventsPage } from "~/pages/events";
import type { Route } from "./+types/events";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "События" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    return params
}

export default function Events({ loaderData }: Route.ComponentProps) {
    return <EventsPage userId={loaderData.userId} slug={loaderData.slug}/>
}