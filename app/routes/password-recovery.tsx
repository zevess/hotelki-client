import { PasswordRecoveryPage } from "~/pages/password-recovery";
import type { Route } from "./+types/password-recovery";

export function meta({ matches }: Route.MetaArgs) {
    return [
        { title: "Сброс пароля" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    return params.token
}

export default function PasswordRecovery({ loaderData }: Route.ComponentProps) {
    return <PasswordRecoveryPage token={loaderData} />
}