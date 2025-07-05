import { AuthPage } from '~/pages/auth';
import type { Route } from './+types/auth';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: 'Вход' },
        { name: 'description', content: 'Welcome to React Router!' },
    ];
}

export default function Auth() {
    return <AuthPage/>
}