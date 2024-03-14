"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import EmptyBoards from "../_components/board/empty-board"
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { Loading } from "@/components/loading"
import { useOrganization } from "@clerk/nextjs"

const Board = () => {
  const data = useQuery(api.board.get)
  const { organization } = useOrganization()

  const orgName = organization?.name

  return (
    <>
      {data === undefined && !organization ? (
        <EmptyBoards />
      ) : (
        <>
          {data?.filter(org => org.orgName === orgName).map(d => (
            <>{d.title}</>
          ))}
        </>
      )}
    </>
  ) 
}

export default Board