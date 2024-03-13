"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { api } from "@/convex/_generated/api"
import { useMutation } from "convex/react"
import { useOrganization } from "@clerk/nextjs"
import { toast } from "@/components/ui/use-toast"

const EmptyBoards = () => {
  const create = useMutation(api.board.create)
  const { organization } = useOrganization()

  const createBoard = () => {
    if (!organization) return

    create({
      title: "Untitled",
      orgId: organization.id,
      favourite: false
    }).then((id) => {
        toast({
          title:"Board created"
        })
    }).catch(() => {
        toast({
          title: "Failed to create a board"
        })
    })
  }

  return (
    <div className="flex flex-col items-center h-[60vh] w-full justify-center gap-y-4">
      <h1 className="dashboard-title">No boards</h1>
      <p>Create your first board to get started.</p>

      <Button onClick={createBoard}>
        Create a board
      </Button>
    </div>
  )
}

export default EmptyBoards