import { WishesPage } from "~/pages/Wishes";
import type { Route } from "./+types/wishes";
import { wishes } from "~/pages/Wishes/model/types";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Wishes" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    return wishes
}

export default function Wishes({ loaderData }: Route.ComponentProps) {


    return <WishesPage title={"Все хотелки"} wishes={wishes} />
}