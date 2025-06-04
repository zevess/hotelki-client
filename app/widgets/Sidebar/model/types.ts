interface INavItem {
    title: string,
    url: string,
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    isAction?: boolean
}