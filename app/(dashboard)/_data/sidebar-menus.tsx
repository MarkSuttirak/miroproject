import { ReactNode } from "react"
import { AppWindow, Plus, Clipboard, FolderHeart } from "lucide-react"

export interface SidebarMenuProps {
    title: string,
    icon: ReactNode,
    link: string
}
  
export const orgMenus: SidebarMenuProps[] = [
  {
    title:"Add organization",
    icon:<Plus />,
    link:'/organization/add'
  },
  {
    title:"Manage organization",
    icon:<AppWindow />,
    link:'/organization/manage'
  }
]

export const boardMenus: SidebarMenuProps[] = [
  {
    title:"Team boards",
    icon:<Clipboard />,
    link:'/board'
  },
  {
    title:"Favourite boards",
    icon:<FolderHeart />,
    link:'/board/favourites'
  },
]