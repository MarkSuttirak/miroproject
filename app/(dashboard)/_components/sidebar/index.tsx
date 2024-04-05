"use client"

import { useEffect, useState } from "react"
import OrgList from "./OrgList"
import Link from "next/link"
import { boardMenus, orgMenus } from "../../_data/sidebar-menus"
import { MenuItems } from "@/components/MenuLink"
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

  return (
    <div 
      className={
        cn("-translate-x-full lg:translate-x-0 h-full flex flex-col gap-y-6 w-[280px] text-white bg-blue-600 fixed left-0 top-0 z-[49] p-4", 
        {"translate-x-0": isSidebarOpen})
      }
    >
      <Link href="/">
        <h2 className="cal-sans text-[17px] font-semibold">
          zaviago
          <span className="text-[13px]">.com</span>
        </h2>
      </Link>

      <section>
        <div className="flex flex-col gap-y-2">
          <h2 className="px-2 text-lg font-semibold">Organizations</h2>

          <OrgList />
          <MenuItems menus={orgMenus} active={activeMenu} setActive={setActiveMenu}/>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-y-2">
          <h2 className="px-2 text-lg font-semibold">Boards</h2>

          <MenuItems menus={boardMenus} active={activeMenu} setActive={setActiveMenu}/>
        </div>
      </section>
    </div>
  )
}

export default Sidebar