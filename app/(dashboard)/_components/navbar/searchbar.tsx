"use client"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { KeyboardEvent, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"

interface SearchResult {
  title: string,
  link?: string
}

const searchList: SearchResult[] = [
  {
    title:"Add organization",
    link:"/organization/add"
  },
  {
    title:"Manage organization",
    link:"/organization/manage"
  }
]

const Searchbar = () => {
  const [open, setOpen] = useState(false)

  const data = useQuery(api.board.get)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[320px] text-black justify-start items-center gap-x-2"
        >
          <Search className="w-4 h-4"/>
          Search boards...
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[320px] p-0 z-[100]">
        <Command>
          <CommandInput placeholder="Search the board" />
          <CommandList>
            <CommandEmpty>No results found</CommandEmpty>
            <CommandGroup heading="Organization">
              {searchList.map(list => (
                <CommandItem key={list.title}>
                  {list.title}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default Searchbar