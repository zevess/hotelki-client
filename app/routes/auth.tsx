import { AuthPage } from '~/pages/Auth';
import type { Route } from './+types/auth';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: 'Auth' },
        { name: 'description', content: 'Welcome to React Router!' },
    ];
}

export default function Auth() {
    return <AuthPage/>
}