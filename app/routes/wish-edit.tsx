import { WishEditPage } from "~/pages/wishes/ui/wish-edit";
import type { Route } from "./+types/wish-edit";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Редактировать хотелку" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
}

export default function WishEdit({ loaderData }: Route.ComponentProps) {
    return <WishEditPage />
}