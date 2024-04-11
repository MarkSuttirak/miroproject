"use client"

import { useEffect, useState } from "react"
import { MenuItems, MenuModal } from "@/components/MenuLink"
import { usePathname, useRouter } from 'next/navigation'
import { cn } from "@/lib/utils"
import { OpenMobileSidebarProps } from "@/types"
import whiteboardIcon from "@/public/whiteboard-icon.svg"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/Icons"
import { CreateOrganization } from "@clerk/nextjs"
import { ArrowLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
      <section className="px-4">
        <div className="flex flex-col gap-y-7">
          <Link href="/" className="group">
            <Button variant="ghost" className="flex items-center w-full justify-start">
              <ArrowLeft className="h-4 w-4 mr-2"/>
              Back to Home
            </Button>
          </Link>


        </div>
      </section>
    </div>
  )
}

export default TemplateSidebar