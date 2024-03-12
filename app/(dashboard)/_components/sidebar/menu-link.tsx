import { cn } from "@/lib/utils"
import { ReactNode, useEffect, MouseEvent } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'

interface MenuLinkProps {
    link: string,
    active: string,
    setActive: Function,
    icon: ReactNode,
    title: string,
    onClick?: Function
}

const MenuLink = ({link, active, setActive, icon, title, onClick} : MenuLinkProps) => {

  const handleClickLink = () => {
    setActive(link)
    if (onClick) onClick()
  }

  return (
    <Link href={link}>
      <button 
        className={cn("sidebar-btn", {"bg-white/25": active == link})}
        onClick={handleClickLink}
      >
        {icon}
        <p className="text-base">{title}</p>
      </button>
    </Link>
  )
}

export default MenuLink