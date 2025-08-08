import { AuthPage } from "~/pages/auth";
import type { Route } from "./+types/new-verification";


export function meta({ matches }: Route.MetaArgs) {
    return [
        { title: "Подтверждение аккаунта" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    return params.token
}

export default function NewVerification({ loaderData }: Route.ComponentProps) {
    return <AuthPage token={loaderData} />
}