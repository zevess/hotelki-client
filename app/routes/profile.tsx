import { ProfilePage } from "~/pages/profile";
import type { Route } from "./+types/profile";
import { userService } from "~/entities/user/user.service";


export function meta({ matches }: Route.MetaArgs) {
    return [
        { title: matches[2].data.name },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {

    const userData = await userService.getUser(params.userId)
    return userData
}

export default function Profile({ loaderData }: Route.ComponentProps) {
    return <ProfilePage userData={loaderData} />
}