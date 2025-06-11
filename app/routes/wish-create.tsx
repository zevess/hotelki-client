import { WishCreatePage } from '~/pages/Wishes/ui/WishCreate';
import type { Route } from './+types/wish-create';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: 'Events' },
        { name: 'description', content: 'Welcome to React Router!' },
    ];
}

export default function WishCreate() {
    return < WishCreatePage/>
}