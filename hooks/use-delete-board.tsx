import { useMutation, useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { toast } from "@/components/ui/use-toast"
import { useState } from "react"

interface DeleteBoardFuncProps {
  whenDone?: () => void
  whenFailed?: () => void
}

export const useDeleteBoard = ({whenDone, whenFailed}: DeleteBoardFuncProps) => {
  const mutate = useMutation(api.board.remove)
  const [isDeleting, setIsDeleting] = useState(false)

  const deleteBoard = (id: any) => {
    setIsDeleting(true)

    mutate({ id })
    .then(() => {
      toast({
        title:"Board deleted"
      })
      setIsDeleting(false)
      if (whenDone){
        whenDone()
      }
    })
    .catch(() => {
      toast({
        title:"Failed to delete board"
      }) 
      setIsDeleting(false)
      if (whenFailed){
        whenFailed()
      }
    })
  }

  return { isDeleting, deleteBoard }
}