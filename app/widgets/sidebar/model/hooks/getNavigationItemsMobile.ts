import { PUBLIC_URL } from '~/shared/config/url.config'
import ProfileIcon from '~/shared/ui/icons/User.svg?react'
import PlusCircleIcon from '~/shared/ui/icons/PlusCircle.svg?react'
import HeartIcon from '~/shared/ui/icons/Heart.svg?react'

export const getNavigationItemsMobile = (username: string | undefined, isAuth: boolean, currentLocation: string): INavItem[] => {
    return [
        {
            title: "Профиль",
            slug: "/profile",
            url: isAuth ? PUBLIC_URL.profile(username) : PUBLIC_URL.auth(),
            icon: ProfileIcon,
            isActive: currentLocation === PUBLIC_URL.profile(username),
            
        },
        {
            title: "Добавить хотелку",
            slug: "/",
            url: isAuth ? PUBLIC_URL.wishesCreate() : PUBLIC_URL.auth(),
            icon: PlusCircleIcon,
            isAction: true,
            isActive: currentLocation === (isAuth ? PUBLIC_URL.wishesCreate() : PUBLIC_URL.auth())
        },
        {
            title: "Хотелки",
            url: isAuth ? PUBLIC_URL.wishes(username) : PUBLIC_URL.auth(),
            icon: HeartIcon,
            isActive: currentLocation === PUBLIC_URL.wishes(username)
        },

    ]
}