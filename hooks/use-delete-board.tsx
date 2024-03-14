import { useMutation, useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { toast } from "@/components/ui/use-toast"
import { useState } from "react"

export const useDeleteBoard = () => {
  const mutate = useMutation(api.board.remove)
  const [isCreating, setIsCreating] = useState(false)

  const deleteBoard = (id: any) => {
    mutate({ id })
    .then(() => {
      toast({
        title:"Board deleted"
      })
    })
    .catch(() => {
      toast({
        title:"Failed to delete board"
      }) 
    })
  }

  return { isCreating, deleteBoard }
}