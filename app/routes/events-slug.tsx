import { EventsPage } from "~/pages/events";
import { userService } from "~/entities/user/user.service";
import type { Route } from "./+types/events-slug";


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


export default function EventsSlug({ loaderData }: Route.ComponentProps) {
    return <EventsPage userData={loaderData.userData} slug={loaderData.params.slug} userId={loaderData.params.userId} />
}