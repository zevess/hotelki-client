import { WishesPage } from "~/pages/wishes";
import type { Route } from "./+types/wishes";
import { userService } from "~/entities/user/model/user.service";



export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Хотелки" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    const userData = await userService.getUser(params.userId)
    return { userData}
}

export default function Wishes({ loaderData }: Route.ComponentProps) {
    return <WishesPage userData={loaderData.userData} title={"Все хотелки"} />
}