import { CreateOrganization } from "@clerk/nextjs"
import { ReactNode } from "react"
import { Plus } from "lucide-react"
import AddOrganizationButton from "./add-org-button"
import OrgList from "./org-list"

type SidebarMenus = {
    title: string,
    icon: ReactNode,
    link?: string,
    component?: ReactNode
}

const sidebarMenus: SidebarMenus[] = [
    {
      title:"Add Organization",
      icon:<Plus />,
      component:<AddOrganizationButton />
    }
]

const Sidebar = () => {
    return (
      <div className="h-full w-[240px] text-white bg-blue-800 fixed left-0 z-[1] p-4">
        <h1 className="text-2xl font-bold mb-6">Miroproj</h1>

        <OrgList />
        <AddOrganizationButton />
      </div>
    )
}

export default Sidebar