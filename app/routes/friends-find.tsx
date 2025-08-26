import type { Route } from "./+types/friends-find";
import { FriendsFindPage } from "~/pages/friends-find";

export function meta({ matches }: Route.MetaArgs) {
    return [
        { title: "Поиск" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function FriendsFind({ loaderData }: Route.ComponentProps) {
    return <FriendsFindPage  />
}