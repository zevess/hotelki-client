import { ProfileEditPage } from "~/pages/profile/ui/profile-edit";
import type { Route } from "./+types/profile-edit";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Редактировать профиль" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function ProfileEdit() {
    return <ProfileEditPage/>
}