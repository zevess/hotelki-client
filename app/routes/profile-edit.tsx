import { ProfileEditPage } from "~/pages/Profile/ui/ProfileEdit";
import type { Route } from "./+types/profile-edit";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Profile" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function ProfileEdit() {
    return <ProfileEditPage/>
}