import ProfileIcon from '../../../../components/icons/User.svg?react'
import PlusCircleIcon from '../../../../components/icons/PlusCircle.svg?react'
import HeartIcon from '../../../../components/icons/Heart.svg?react'
import { PUBLIC_URL } from '~/lib/config/url.config'

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