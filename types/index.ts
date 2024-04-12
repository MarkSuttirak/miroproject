import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"
import { StaticImageData } from "next/image"
import { ReactNode } from "react"

export type BoardCardType = "grid" | "list" | string

export type Action = "Update" | "Create" | "Delete"

export type WhiteboardingType = "whiteboard" | "presentation" | "design-item"

export interface CreateWhiteboarding {
  trigger: ReactNode
  type: WhiteboardingType
}

export interface MenuLinkProps {
    link: string
    active: string
    setActive: (link: string) => void
    icon: ReactNode
    title: string
    onClick?: () => void
    submenus?: SidebarMenuProps[]
}

export interface MenuItemsProps {
    menus: any[]
    active: string
    setActive: (link: string) => void
}

export interface MenuModalProps {
    trigger: ReactNode | string
    children: ReactNode
    contentClassName?: string
}

export interface OpenMobileSidebarProps {
    isSidebarOpen?: boolean
    setIsSidebarOpen?: Function
}

export interface SidebarMenuProps {
    title: string
    icon: ReactNode
    link: string
}

export interface TemplatePageMenuProps {
    title: string
    icon: ReactNode
    submenus?: SidebarMenuProps[]
    link?: string
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
    trigger?: string | ReactNode
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
    children: ReactNode
    id?: any
    title?: string
    className?: string
}

export interface CenterButtonProps {
    icon: ReactNode
    title: string
    desc: string
}

export interface WhiteboardCardProps {
    imageUrl: StaticImageData
    title: string | ReactNode
    desc?: string | ReactNode
}

export interface WhiteboardTriggers {
    className: string
    title: string
    type: WhiteboardingType
}