"use client"

import { ReactNode, useEffect, useState } from "react"
import { AppWindow, Plus } from "lucide-react"
import OrgList from "./org-list"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface SidebarMenuProps {
  title: string,
  icon: ReactNode,
  link: string
}

const sidebarMenus: SidebarMenuProps[] = [
  {
    title:"Add Organization",
    icon:<Plus />,
    link:'/organization/add'
  },
  {
    title:"Manage Organization",
    icon:<AppWindow />,
    link:'/organization/manage'
  }
]

const Sidebar = () => {
  const [isMenuActive, setIsMenuActive] = useState<string>(location.pathname)

  useEffect(() => {
    setIsMenuActive(location.pathname)
  }, [isMenuActive])

  return (
    <div className="h-full flex flex-col gap-y-2 w-[300px] text-white bg-blue-600 fixed left-0 z-[1] p-4">
      <Link href="/">
        <h1 className="text-2xl font-bold mb-4 text-center">Miroproj</h1>
      </Link>

      <OrgList />

      {sidebarMenus.map(menu => (
        <Link href={menu.link}>
          <button 
            className={cn("sidebar-btn", {"bg-white/25": isMenuActive === menu.link})}
          >
            {menu.icon}
            <p className="text-base">{menu.title}</p>
          </button>
        </Link>
      ))}
    </div>
  )
}

export default Sidebar