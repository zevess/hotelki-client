import { WishesPage } from "~/pages/wishes";
import type { Route } from "./+types/wishes";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Wishes" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Wishes() {
    return <WishesPage />
}