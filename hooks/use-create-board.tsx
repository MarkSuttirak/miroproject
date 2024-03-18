import { useMutation, useQuery } from "convex/react"
import { useOrganization } from "@clerk/nextjs"
import { api } from "@/convex/_generated/api"
import { toast } from "@/components/ui/use-toast"
import { useState } from "react"

interface CreateBoardFuncProps {
  whenDone?: () => void
  whenFailed?: () => void
}

export const useCreateBoard = ({whenDone, whenFailed}: CreateBoardFuncProps) => {
  const { organization } = useOrganization()
  const create = useMutation(api.board.create)

  const [isCreating, setIsCreating] = useState(false)

  const createBoard = (boardTitle: string) => {
    if (!organization) return

    setIsCreating(true)

    create({
      title: boardTitle,
      orgName: organization.name,
      orgId: organization.id,
      favourite: false
    }).then(() => {
        toast({ title:"Board created" })

        setIsCreating(false)
        whenDone && whenDone()
    }).catch(() => {
        toast({ title:"Failed to create a board" })

        setIsCreating(false)
        whenFailed && whenFailed()
    })
  }

  return { isCreating, createBoard }
}