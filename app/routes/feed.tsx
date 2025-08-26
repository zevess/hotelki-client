import type { Route } from "./+types/feed";
import { FeedPage } from "~/pages/feed";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Лента событий" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Feed({ loaderData }: Route.ComponentProps) {
    return <FeedPage />
}