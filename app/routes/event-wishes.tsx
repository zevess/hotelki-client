import { WishesPage } from '~/pages/Wishes';
import type { Route } from './+types/event-wishes';
import { wishes } from '~/pages/Wishes/model/types';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: 'Events' },
        { name: 'description', content: 'Welcome to React Router!' },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    return params
}

export default function EventWishes({ params }: Route.ComponentProps) {
    return <WishesPage title={params.wishesTag} wishes={wishes} />
}