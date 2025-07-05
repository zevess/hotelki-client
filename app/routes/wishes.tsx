import { WishesPage } from "~/pages/wishes";
import type { Route } from "./+types/wishes";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Хотелки" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    return params
}

export default function Wishes({ loaderData }: Route.ComponentProps) {

    return <WishesPage title={"Все хотелки"} userId={loaderData.userId} />
}