import { AuthPage } from '~/pages/auth';
import type { Route } from './+types/auth';

export function meta({ matches }: Route.MetaArgs) {
    return [
        { title: "Вход" },
        { name: 'description', content: 'Welcome to React Router!' },
    ];
}

// export async function clientLoader({ params }: Route.ClientLoaderArgs) {
//     return params
// }

export default function Auth({ loaderData }: Route.ComponentProps) {
    return <AuthPage />
}