import { WishEditPage } from "~/pages/wish-edit";
import type { Route } from "./+types/wish-edit";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Редактировать хотелку" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}


export default function WishEdit({ loaderData }: Route.ComponentProps) {
    return <WishEditPage />
}