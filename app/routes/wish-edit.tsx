import { EventsPage } from "~/pages/events";
import { EventEditPage } from "~/pages/events/ui/event-edit";

import { eventService } from "~/entities/event/event.service";
import { WishEditPage } from "~/pages/wishes/ui/wish-edit";
import type { Route } from "./+types/wish-edit";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Редактировать хотелку" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    // const eventData = await eventService.getByUserAndSlug(params.userId, params.slug)
    // console.log(eventData)
}

export default function WishEdit({ loaderData }: Route.ComponentProps) {
    return <WishEditPage />
}