import { useMutation, useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { toast } from "@/components/ui/use-toast"
import { useState } from "react"

interface DeleteBoardFuncProps {
  whenDone?: () => void
  whenFailed?: () => void
}

export const useUpdateBoard = ({whenDone, whenFailed}: DeleteBoardFuncProps) => {
  const update = useMutation(api.board.update)
  const [isUpdating, setIsUpdating] = useState(false)

  const updateBoard = (boardTitle: string, boardId: any) => {
    setIsUpdating(true)

    update({ title: boardTitle, id: boardId })
    .then(() => {
      toast({ title:"Board updated" })

      setIsUpdating(false)
      whenDone && whenDone()
    })
    .catch(() => {
      toast({ title:"Failed to update board" }) 

      setIsUpdating(false)
      whenFailed && whenFailed()
    })
  }

  return { isUpdating, updateBoard }
}