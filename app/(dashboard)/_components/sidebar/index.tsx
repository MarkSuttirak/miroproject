"use client"

import { useEffect, useState } from "react"
import OrgList from "./org-list"
import Link from "next/link"
import { boardMenus, orgMenus } from "../../_data/sidebar-menus"
import MenuLink from "./menu-link"
import { OrganizationInvitation } from "@clerk/nextjs/server"

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState<string>(location.pathname)

  return (
    <div className="h-full flex flex-col gap-y-6 w-[280px] text-white bg-blue-600 fixed left-0 top-0 z-[1] p-4">
      <Link href="/">
        <h1 className="text-2xl font-bold mb-2 text-center">Miroproj</h1>
      </Link>

      <section>
        <div className="flex flex-col gap-y-2">
          <h2 className="px-2 text-lg font-semibold">Your organizations</h2>

          <OrgList />

          {orgMenus.map(menu => (
            <MenuLink link={menu.link} active={activeMenu} setActive={setActiveMenu} icon={menu.icon} title={menu.title}/>
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-y-2">
          <h2 className="px-2 text-lg font-semibold">Boards</h2>

          {boardMenus.map(menu => (
            <MenuLink link={menu.link} active={activeMenu} setActive={setActiveMenu} icon={menu.icon} title={menu.title}/>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Sidebar