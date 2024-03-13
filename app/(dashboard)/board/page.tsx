"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import EmptyBoards from "../_components/board/empty-board"
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"

const Board = ({ orgId } : { orgId: string }) => {

  // Temporary code, will be changed to query of boards
  const data = useQuery(api.board.getBoard, { orgId })

  console.log(data)
  return (
    <>
      <EmptyBoards />
    </>
  )
}

export default Board