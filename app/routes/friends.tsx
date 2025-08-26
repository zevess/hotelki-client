import { userService } from "~/entities/user/model/user.service";
import { FriendsPage } from "~/pages/friends";
import type { Route } from "./+types/friends";
import { friendsService } from "~/entities/friends/model/friends.service";

export function meta({ matches }: Route.MetaArgs) {
    return [
        { title: "Друзья" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {

    const userData = await userService.getUserByUsername(params.username)
    const friendsData = await friendsService.getFriends(userData.id)
    return { userData, friendsData }
}

export default function Friends({ loaderData }: Route.ComponentProps) {
    return <FriendsPage friends={loaderData.friendsData} userData={loaderData.userData} />
}