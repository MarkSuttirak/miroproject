import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Sidebar from "../sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent className="p-0 bg-transparent w-[280px]" side="left">
          <Sidebar />
        </SheetContent>
      </Sheet>

      <OrganizationSwitcher 
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display:"flex",
              backgroundColor:"white",
              borderRadius:"8px",
              padding:"8px 12px",
              outline:"none"
            },
            organizationSwitcherTrigger: {
              outline:"none",
              backgroundColor:"white"
            }
          }
        }}
      />
      <div className="flex items-center gap-x-4">
        <UserButton />
      </div>
    </div>
  )
}

export default Navbar