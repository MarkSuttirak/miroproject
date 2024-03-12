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
import Searchbar from "./searchbar"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent className="p-0 bg-transparent w-[280px]" side="left">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>

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
        <Searchbar />
        <UserButton />
      </div>
    </nav>
  )
}

export default Navbar