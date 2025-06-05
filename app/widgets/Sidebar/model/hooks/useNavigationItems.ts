import ProfileIcon from '../../../../components/icons/User.svg?react'
import PlusCircleIcon from '../../../../components/icons/PlusCircle.svg?react'
import HeartIcon from '../../../../components/icons/Heart.svg?react'
import CalendarIcon from '../../../../components/icons/Calendar.svg?react'

export const useNavigationItems = ():INavItem[] => {
    return [
    {
        title: "Профиль",
        url: "/profile",
        icon: ProfileIcon,
    },
    {
        title: "События",
        url: "/events",
        icon: CalendarIcon,
    },
    {
        title: "Хотелки",
        url: "/wishes",
        icon: HeartIcon,
    },
    {
        title: "Добавить событие",
        url: "/events/create",
        icon: PlusCircleIcon,
        isAction: true
    },
    {
        title: "Добавить хотелку",
        url: "#",
        icon: PlusCircleIcon,
        isAction: true
    },
]
}
