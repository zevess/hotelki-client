import ProfileIcon from '../../../../components/icons/User.svg?react'
import PlusCircleIcon from '../../../../components/icons/PlusCircle.svg?react'
import HeartIcon from '../../../../components/icons/Heart.svg?react'

export const useNavigationItemsMobile = (): INavItem[] => {
    return [
        {
            title: "Профиль",
            url: "/profile",
            icon: ProfileIcon,
        },
        {
            title: "Добавить хотелку",
            url: "/wish/create",
            icon: PlusCircleIcon,
            isAction: true
        },
        {
            title: "Хотелки",
            url: "/wishes",
            icon: HeartIcon,
        },

    ]
}