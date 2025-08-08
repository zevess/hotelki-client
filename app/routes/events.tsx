import { EventsPage } from "~/pages/events";
import type { Route } from "./+types/events";
import { userService } from "~/entities/user/user.service";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "События" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    const userData = await userService.getUser(params.userId)

    return { userData, params }
}

export default function Events({ loaderData }: Route.ComponentProps) {
    return <EventsPage userId={loaderData.params.userId} userData={loaderData.userData} />
}