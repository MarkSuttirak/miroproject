import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CreateOrganization } from "@clerk/nextjs"
import { Plus } from "lucide-react"

const AddOrganizationButton = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
          <button className="sidebar-btn">
            <Plus />
            Add Organization
          </button>
        </DialogTrigger>
        <DialogContent className="p-0 border-none bg-transparent max-w-[480px]">
          <CreateOrganization />
        </DialogContent>
    </Dialog>
  )
}

export default AddOrganizationButton