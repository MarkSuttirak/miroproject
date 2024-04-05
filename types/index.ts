export interface MenuLinkProps {
    link: string
    active: string
    setActive: Function
    icon: React.ReactNode
    title: string
    onClick?: Function
}

export interface MenuItemsProps {
    menus: any[]
    active: string
    setActive: (link: string) => void
}