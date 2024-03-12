"use client"

import { Input } from "@/components/ui/input"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { ChangeEvent, useEffect, useState } from "react"

const Searchbar = () => {

  const [value, setValue] = useState("")
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <>
      <Input 
        className="w-[400px] outline-none text-black" 
        placeholder="Search boards..."
        onChange={handleChange}
        value={value}
      />

      <p>Search: {search}</p>
    </>
  )
}

export default Searchbar