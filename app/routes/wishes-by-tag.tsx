import { WishesPage } from '~/pages/Wishes';
import type { Route } from './+types/wishes-by-tag';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: 'Events' },
        { name: 'description', content: 'Welcome to React Router!' },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    return params
}

export default function WishesByTag({ params }: Route.ComponentProps) {
    return <WishesPage title={params.wishesTag} />
}