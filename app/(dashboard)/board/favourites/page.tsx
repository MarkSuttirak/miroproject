"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { Loading } from "@/components/loading"
import { useOrganization } from "@clerk/nextjs"

const Favourites = () => {
  const data = useQuery(api.board.get)
  const { organization } = useOrganization()

  const orgName = organization?.name

  return (
    <>
      {data?.filter(org => org.favourite === true).map(d => (
        <>{d.title}</>
      ))}
    </>
  )
}

export default Favourites