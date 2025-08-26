import ProfileIcon from '~/shared/ui/icons/User.svg?react'
import PlusCircleIcon from '~/shared/ui/icons/PlusCircle.svg?react'
import HeartIcon from '~/shared/ui/icons/Heart.svg?react'
import CalendarIcon from '~/shared/ui/icons/Calendar.svg?react'
import { PUBLIC_URL } from '~/shared/config/url.config'
import { CalendarClock, Users } from 'lucide-react'


export const useNavigationItems = (username: string | undefined, isAuth: boolean, isSameUser: boolean): INavItem[] => {
    return [
        {
            title: "Профиль",
            url: PUBLIC_URL.profile(username),
            icon: ProfileIcon,
        },
        {
            title: "Друзья",
            url: PUBLIC_URL.friends(username),
            icon: Users
        },
        {
            title: "Ближайшие события друзей",
            url: PUBLIC_URL.feed(),
            icon: CalendarClock,
            isVisible: isSameUser
        },
        {
            title: "События",
            url: PUBLIC_URL.events(username),
            icon: CalendarIcon,
        },
        {
            title: "Хотелки",
            url: PUBLIC_URL.wishes(username),
            icon: HeartIcon,
        },
        {
            title: "Добавить событие",
            url: isAuth ? PUBLIC_URL.eventCreate() : PUBLIC_URL.auth(),
            icon: PlusCircleIcon,
            isAction: true,
            isVisible: isSameUser
        },
        {
            title: "Добавить хотелку",
            url: isAuth ? PUBLIC_URL.wishesCreate() : PUBLIC_URL.auth(),
            icon: PlusCircleIcon,
            isAction: true,
            isVisible: isSameUser
        },
    ]
}
