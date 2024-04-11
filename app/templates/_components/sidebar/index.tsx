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
        <Link href="/">
          <Button variant="ghost" className="flex items-center gap-x-2">
            <ArrowLeft className="h-4 w-4"/>
            Back to Home
          </Button>
        </Link>
    </div>
  )
}

export default TemplateSidebar