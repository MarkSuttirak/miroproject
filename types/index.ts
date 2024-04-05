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

export interface OpenMobileSidebarProps {
    isSidebarOpen?: boolean,
    setIsSidebarOpen?: Function
}

export interface SidebarMenuProps {
    title: string,
    icon: React.ReactNode,
    link: string
}