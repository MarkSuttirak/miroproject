import { cn } from "@/lib/utils"
import { ReactNode } from "react"
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

export const MenuLink = ({link, active, setActive, icon, title, onClick} : MenuLinkProps) => {

  const handleClickLink = () => {
    setActive(link)

    onClick && onClick()
  }

  return (
    <Link href={link}>
      <button 
        className={cn("sidebar-btn", {"bg-zinc-100": active == link})}
        onClick={handleClickLink}
      >
        {icon}
        <p className="text-[13px] font-medium">{title}</p>
      </button>
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