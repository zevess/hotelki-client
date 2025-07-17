import ProfileIcon from '../../../../components/icons/User.svg?react'
import PlusCircleIcon from '../../../../components/icons/PlusCircle.svg?react'
import HeartIcon from '../../../../components/icons/Heart.svg?react'
import CalendarIcon from '../../../../components/icons/Calendar.svg?react'
import { PUBLIC_URL } from '~/lib/config/url.config'

export const useNavigationItems = (userId: string | undefined, isAuth: boolean): INavItem[] => {
    return [
        {
            title: "Профиль",
            url: PUBLIC_URL.profile(userId),
            icon: ProfileIcon,
        },
        {
            title: "События",
            url: PUBLIC_URL.events(userId),
            icon: CalendarIcon,
        },
        {
            title: "Хотелки",
            url: PUBLIC_URL.wishes(userId),
            icon: HeartIcon,
        },
        {
            title: "Добавить событие",
            url: isAuth ? PUBLIC_URL.eventCreate() : PUBLIC_URL.auth(),
            icon: PlusCircleIcon,
            isAction: true
        },
        {
            title: "Добавить хотелку",
            url: isAuth ? PUBLIC_URL.wishesCreate() : PUBLIC_URL.auth(),
            icon: PlusCircleIcon,
            isAction: true
        },
    ]
}
