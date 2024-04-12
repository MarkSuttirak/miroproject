"use client"

import { useEffect, useState } from "react"
import OrgList from "./OrgList"
import { templateMenus, navigationMenus, orgMenus } from "../../_data/sidebar-menus"
import { MenuItems, MenuModal } from "@/components/MenuLink"
import { usePathname, useRouter } from 'next/navigation'
import { cn } from "@/lib/utils"
import { OpenMobileSidebarProps } from "@/types"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/Icons"
import { Plus } from "lucide-react"
import AddOrg from "./AddOrg"

const Sidebar = ({isSidebarOpen, setIsSidebarOpen} : OpenMobileSidebarProps) => {
  const pathname = usePathname()
  const [activeMenu, setActiveMenu] = useState(pathname)

  useEffect(() => {
    setActiveMenu(pathname)
  }, [pathname])

  return (
    <div 
      className={
        cn("-translate-x-full lg:translate-x-0 h-full flex flex-col w-[256px] border-r border-r-lightergray fixed left-0 top-0 z-[49] pt-[18px]", 
        {"translate-x-0": isSidebarOpen})
      }
    >
      <section className="flex flex-col gap-y-7">
        <section className="group flex items-center gap-x-2 relative px-3.5">
          <Icons.whiteboardIcon className="min-w-9 min-h-9 z-[99] drop-shadow-md" />
          <div>
            <h2 className="cal-sans text-[17px] font-semibold">
              zaviago
              <span className="text-[13px]">.com</span>
            </h2>
            <p className="text-[11px] font-medium tracking-[-0.33px] text-[#5A5A5A] -mt-1">{window.location.hostname}</p>
          </div>

          <div className="w-8 h-8 absolute top-2.5 group-hover:top-3.5 transition-all rounded-[5px] left-4 bg-[#C9C9C929] border border-[#ACACAC0F] drop-shadow-md" />
        </section>

        <div className="flex flex-col px-3">
          <MenuItems menus={navigationMenus} active={activeMenu} setActive={setActiveMenu}/>
        </div>
      </section>

      <Separator className="bg-lightergray my-3"/>

      <section className="flex flex-col gap-y-7">
        <section className="px-4">
          <div className="flex flex-col">
            <h2 className="text-sm py-3 text-lightgray font-medium">Organizations</h2>

            <OrgList />

            <div className="flex flex-col gap-y-2">
              <MenuModal trigger={
                <button className="sidebar-btn">
                  <div className="flex items-center gap-x-2">
                    <Plus className="w-4 h-4 stroke-[1.5] text-darkergray"/>
                    <p className="text-[13px] font-medium">Create new</p>
                  </div>
                </button>
              } contentClassName="p-0 min-w-0 max-w-none w-fit">
                <AddOrg />
              </MenuModal>

              <MenuItems menus={orgMenus} active={activeMenu} setActive={setActiveMenu}/>
            </div>
          </div>
        </section>

        <section className="px-4">
          <div className="flex flex-col">
            <h2 className="text-sm py-3 text-lightgray font-medium">Templates</h2>

            <MenuItems menus={templateMenus} active={activeMenu} setActive={setActiveMenu}/>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Sidebar