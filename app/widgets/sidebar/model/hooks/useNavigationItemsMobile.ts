import { PUBLIC_URL } from '~/shared/config/url.config'
import ProfileIcon from '~/shared/ui/icons/User.svg?react'
import PlusCircleIcon from '~/shared/ui/icons/PlusCircle.svg?react'
import HeartIcon from '~/shared/ui/icons/Heart.svg?react'

export const useNavigationItemsMobile = (userId: string | undefined, isAuth: boolean): INavItem[] => {
    return [
        {
            title: "Профиль",
            url: PUBLIC_URL.profile(userId),
            icon: ProfileIcon,
        },
        {
            title: "Добавить хотелку",
            url: isAuth ? PUBLIC_URL.wishesCreate() : PUBLIC_URL.auth(),
            icon: PlusCircleIcon,
            isAction: true
        },
        {
            title: "Хотелки",
            url: PUBLIC_URL.wishes(userId),
            icon: HeartIcon,
        },

    ]
}