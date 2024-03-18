"use client"

import { useEffect, useState } from "react"
import OrgList from "./org-list"
import Link from "next/link"
import { boardMenus, orgMenus } from "../../_data/sidebar-menus"
import MenuLink from "./menu-link"
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

interface OpenMobileSidebarProps {
  isSidebarOpen?: boolean,
  setIsSidebarOpen?: Function
}

const Sidebar = ({isSidebarOpen, setIsSidebarOpen} : OpenMobileSidebarProps) => {
  const pathname = usePathname()
  const [activeMenu, setActiveMenu] = useState(pathname)

  useEffect(() => {
    setActiveMenu(pathname)
  }, [pathname])

  const MenuItems = ({ menus } : { menus: any[] }) => {
    return <>
      {menus.map(menu => (
        <MenuLink
          key={menu.title} 
          link={menu.link} 
          active={activeMenu} 
          setActive={setActiveMenu} 
          icon={menu.icon}
          title={menu.title}
        />
      ))}
    </>
  }

  return (
    <div 
      className={
        cn("-translate-x-full lg:translate-x-0 h-full flex flex-col gap-y-6 w-[280px] text-white bg-blue-600 fixed left-0 top-0 z-[49] p-4", 
        {"translate-x-0": isSidebarOpen})
      }
    >
      <Link href="/">
        <h1 className="text-2xl font-bold mb-2 text-center">Miroproj</h1>
      </Link>

      <section>
        <div className="flex flex-col gap-y-2">
          <h2 className="px-2 text-lg font-semibold">Your organizations</h2>

          <OrgList />
          <MenuItems menus={orgMenus}/>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-y-2">
          <h2 className="px-2 text-lg font-semibold">Boards</h2>

          <MenuItems menus={boardMenus}/>
        </div>
      </section>
    </div>
  )
}

export default Sidebar