"use client"

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
import { useState } from "react"
import { Menu } from "lucide-react"

const Navbar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="lg:hidden flex items-center">
        <Sheet>
          <SheetTrigger onClick={() => setIsSidebarOpen(true)}>
            <Menu className="w-8 h-8"/>
          </SheetTrigger>
          <SheetContent className="p-0 bg-transparent w-[280px]" side="left">
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:block">
        <OrganizationSwitcher 
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display:"flex",
                backgroundColor:"white",
                outline:"none",
                borderRadius:"8px",
              },
              organizationSwitcherTrigger: {
                outline:"none",
                backgroundColor:"white",
                borderRadius:"8px",
                padding:"8px",
                height:"40px"
              }
            }
          }}
        />
      </div>

      <div className="flex items-center gap-x-4">
        <Searchbar />
        <UserButton />
      </div>
    </nav>
  )
}

export default Navbar