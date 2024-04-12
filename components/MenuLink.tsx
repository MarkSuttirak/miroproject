import { cn } from "@/lib/utils"
import { ReactNode, useState } from "react"
import Link from "next/link"
import { MenuItemsProps, MenuLinkProps, MenuModalProps } from "@/types"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronDown } from "lucide-react"

export const MenuLink = ({link, active, setActive, icon, title, onClick, submenus} : MenuLinkProps) => {

  const [expandSubmenus, setExpandSubmenus] = useState(false)

  const handleClickLink = () => {
    submenus ? setExpandSubmenus(!expandSubmenus) : setActive(link)
    onClick && onClick()
  }

  return (
    <Link href={!submenus ? link : ""}>
      <button 
        className={cn("sidebar-btn", {"bg-zinc-100": active == link})}
        onClick={handleClickLink}
      >
        <div className="flex items-center gap-x-2">
          {icon}
          <p className="text-[13px] font-medium">{title}</p>
        </div>

        {submenus ? <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", {"rotate-180": expandSubmenus})}/> : null}
      </button>

      {submenus && expandSubmenus ? 
        <div className="ml-4">
          <MenuItems menus={submenus} active={active} setActive={setActive}/> 
        </div>
      : null}
    </Link>
  )
}

export const MenuItems = ({ menus, active, setActive } : MenuItemsProps) => {
  return <>
    {menus.map((menu: any) => (
      <MenuLink
        key={menu.title} 
        link={menu.link} 
        active={active}
        setActive={setActive}
        icon={menu.icon}
        title={menu.title}
        submenus={menu.submenus}
      />
    ))}
  </>
}

export const MenuModal = ({ trigger, children, contentClassName } : MenuModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        {trigger}
      </DialogTrigger>
      <DialogContent className={contentClassName}>
        {children}
      </DialogContent>
    </Dialog>
  )
}