import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"

export type BoardCardType = "grid" | "list" | string

export type Action = "Update" | "Create" | "Delete"

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

export interface MenuModalProps {
    trigger: React.ReactNode | string
    children: React.ReactNode
    contentClassName?: string
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

export interface BoardDialogProps {
    id?: any
    trigger?: string | React.ReactNode
    triggerClassName?: string
    action: Action
    onSubmit: (val: string, id: any) => void
    isSubmitting: boolean
    openDialog: boolean
    setOpenDialog: (val: boolean) => void
    defaultValue?: string
}

export interface BoardCardListProps {
    data: any[]
    type: BoardCardType
}

export interface ActionsProps {
    side?: DropdownMenuContentProps["side"]
    sideOffset?: DropdownMenuContentProps["sideOffset"]
    children: React.ReactNode
    id?: any
    title?: string
    className?: string
}

export interface CenterButtonProps {
    icon: React.ReactNode
    title: string
    desc: string
}