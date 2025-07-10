import { WishCreatePage } from '~/pages/wishes/ui/wish-create';
import type { Route } from './+types/wish-create';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: 'Создать хотелку' },
        { name: 'description', content: 'Welcome to React Router!' },
    ];
}

export default function WishCreate() {
    return <WishCreatePage/>
}