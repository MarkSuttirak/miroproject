import { Input } from "@/components/ui/input"
import { useSearchParams } from "next/navigation"

const Searchbar = () => {

  const searchParams = useSearchParams()

  return (
    <Input className="w-[400px]" placeholder="Search boards..."/>
  )
}