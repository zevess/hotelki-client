import { EventsPage } from "~/pages/events";
import type { Route } from "./+types/events";
import { userService } from "~/entities/user/user.service";
import { eventService } from "~/entities/event/event.service";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "События" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    const userData = await userService.getUser(params.userId)
    const eventsData = await eventService.getByUser(params.userId)
    const eventDataBySlug = await eventService.getByUserAndSlug(params.userId, params.slug)
    return { userData, params, eventsData, eventDataBySlug }
}

export default function Events({ loaderData }: Route.ComponentProps) {
    return <EventsPage userData={loaderData.userData} slug={loaderData.params.slug} eventsData={loaderData.eventsData} eventDateBySlug={loaderData.eventDataBySlug} />
}