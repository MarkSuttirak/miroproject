export type BoardCardType = "grid" | "list" | string

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

export interface BoardCardProps {
    title: string
    id?: any
    imageUrl: string
    authorId: string
    authorName: string
    isFavourite: boolean
    creationTime: string
    type: BoardCardType
}

export interface BoardCardListProps {
    data: any[]
    type: BoardCardType
}  