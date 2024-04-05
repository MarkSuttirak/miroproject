import { Plus, Clipboard, Hotel, Settings, Star, Users } from "lucide-react"
import { SidebarMenuProps } from "@/types"

const iconClassName = "w-4 h-4 stroke-[1.5] text-darkergray"

export const orgMenus: SidebarMenuProps[] = [
  {
    title:"Create new",
    icon:<Plus className={iconClassName}/>,
    link:'/organization/add'
  },
  {
    title:"Favorite boards",
    icon:<Star className={iconClassName}/>,
    link:'/favourites'
  },

  /* May be used later, so I commented it */
  // {
  //   title:"Manage organization",
  //   icon:<AppWindow />,
  //   link:'/organization/manage'
  // }
]

export const boardMenus: SidebarMenuProps[] = [
  {
    title:"Team boards",
    icon:<Clipboard className={iconClassName}/>,
    link:'/'
  },
]

export const templateMenus: SidebarMenuProps[] = [
  {
    title:"Team boards",
    icon:<Clipboard className={iconClassName}/>,
    link:'/'
  },
]

export const navigationMenus: SidebarMenuProps[] = [
  {
    title:"Dashboard",
    icon:<Hotel className={iconClassName}/>,
    link:'https://zaviago-dashboard.vercel.app/dashboard/app'
  },
  {
    title:"Settings",
    icon:<Settings className={iconClassName}/>,
    link:'https://zaviago-dashboard.vercel.app/dashboard/settings/account'
  },
  {
    title:"Teams",
    icon:<Users className={iconClassName}/>,
    link:'https://zaviago-dashboard.vercel.app/dashboard/settings/account'
  }
]