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
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const Searchbar = () => {
  const [searchResult, setSearchResult] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchResult(e.target.value)
  }

  return (
    <div className="flex text-black relative">
      <Input 
        placeholder="Search boards..."
        onChange={handleChange}
        value={searchResult}
        className="w-[300px]"
      />

      {searchResult !== "" && 
      <Link href={`/search/${searchResult}`}>
        <Search className="absolute right-2 top-2"/>
      </Link>}
    </div>
  )
}

export default Searchbar