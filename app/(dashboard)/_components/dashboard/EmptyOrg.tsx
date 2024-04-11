import CenterButton from "@/components/CenterButton"
import { MenuModal } from "@/components/MenuLink"
import { Button } from "@/components/ui/button"
import { FolderPlus } from "lucide-react"
import Link from "next/link"
import AddOrg from "../sidebar/AddOrg"

const EmptyOrg = () => {
  return (
    <MenuModal 
      trigger={<CenterButton icon={<FolderPlus />} title="Welcome to Creater" desc="Create an organization to get started"/>}
      contentClassName="p-0 min-w-0 max-w-none w-fit"
    >
      <AddOrg />
    </MenuModal>
  )
}

export default EmptyOrg