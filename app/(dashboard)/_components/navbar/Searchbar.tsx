"use client"

import { ChangeEvent, useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import usePathname from 'next/link'

const Searchbar = () => {
  const [searchResult, setSearchResult] = useState<string>("")
  const searchLink = `/search/${searchResult}`

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchResult(e.target.value)
  }

  const handleEnter = (e: KeyboardEvent) => {
    e.key === "Enter" && usePathname({href: searchLink})
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
        <Link href={searchLink}>
          <Search className="absolute right-2 top-2"/>
        </Link>
      }
    </div>
  )
}

export default Searchbar
