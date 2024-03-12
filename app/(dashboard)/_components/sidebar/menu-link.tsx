import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import Link from "next/link"

interface MenuLinkProps {
    link: string,
    active: string,
    icon: ReactNode,
    title: string
}

const MenuLink = ({link, active, icon, title} : MenuLinkProps) => {
    return (
      <Link href={link}>
        <button 
          className={cn("sidebar-btn", {"bg-white/25": active === link})}
        >
          {icon}
          <p className="text-base">{title}</p>
        </button>
      </Link>
    )
}

export default MenuLink