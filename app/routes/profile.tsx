import { ProfilePage } from "~/pages/Profile";
import type { Route } from "./+types/profile";
import { userService } from "~/entities/user/user-service";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Profile" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    
    const userData = userService.getUser(params.userId)
    return userData
}

export default function Profile({ loaderData }: Route.ComponentProps) {
    return <ProfilePage userData={loaderData} />
}