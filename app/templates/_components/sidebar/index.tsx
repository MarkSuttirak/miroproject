"use client"

import { useEffect, useState } from "react"
import { MenuItems, MenuModal } from "@/components/MenuLink"
import { usePathname, useRouter } from 'next/navigation'
import { cn } from "@/lib/utils"
import { OpenMobileSidebarProps } from "@/types"
import { ArrowLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { templatePageMenus } from "@/app/(dashboard)/_data/template-page-menus"

const TemplateSidebar = ({isSidebarOpen, setIsSidebarOpen} : OpenMobileSidebarProps) => {
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
      <section className="px-3">
        <div className="flex flex-col gap-y-7">
          <Link href="/" className="group">
            <Button variant="ghost" className="flex items-center w-full justify-start">
              <ArrowLeft className="h-4 w-4 mr-2"/>
              Back to Home
            </Button>
          </Link>

          <div className="flex flex-col gap-y-2">
            <MenuItems menus={templatePageMenus} active={activeMenu} setActive={setActiveMenu}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TemplateSidebar