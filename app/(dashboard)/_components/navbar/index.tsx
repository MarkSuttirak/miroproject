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
import Searchbar from "./Searchbar"
import { useState } from "react"
import { Menu } from "lucide-react"

const Navbar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <nav className="navbar">

      {/* Mobile navbar */}
      <div className="lg:hidden flex items-center">
        <Sheet>
          <SheetTrigger onClick={() => setIsSidebarOpen(true)}>
            <Menu className="w-8 h-8"/>
          </SheetTrigger>
          <SheetContent className="p-0 w-[256px]" side="left">
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop navbar */}
      <div>
        <p className="text-[#09090B] text-sm">Dashboard</p>
      </div>

      <div className="flex items-center gap-x-4">
        <Searchbar />
        <UserButton />
      </div>
    </nav>
  )
}

export default Navbar