interface INavItem {
    title: string,
    url: string,
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    slug?: string,
    isAction?: boolean,
    isVisible?: boolean,
    isActive?: boolean
}