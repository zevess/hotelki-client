import { ProfilePage } from "~/pages/Profile";
import type { Route } from "./+types/profile";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Profile" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Profile() {
    return <ProfilePage />
}