"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import EmptyBoards from "../_components/board/empty-board"
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"

const Board = ({ orgId } : { orgId: string }) => {

  return (
    <>
      <EmptyBoards />
    </>
  )
}

export default Board