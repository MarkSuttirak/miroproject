import { useMutation, useQuery } from "convex/react"
import { useOrganization } from "@clerk/nextjs"
import { api } from "@/convex/_generated/api"
import { toast } from "@/components/ui/use-toast"
import { useState } from "react"

export const useCreateBoard = () => {
  const { organization } = useOrganization()
  const create = useMutation(api.board.create)

  const [isCreating, setIsCreating] = useState(false)

  const createBoard = (title: string) => {
    if (!organization) return

    setIsCreating(true)

    create({
      title: title,
      orgName: organization.name,
      orgId: organization.id,
      favourite: false
    }).then(() => {
        toast({
          title:"Board created"
        })
        setIsCreating(false)

    }).catch(() => {
        toast({
          title:"Failed to create a board"
        })
        setIsCreating(false)

    })
  }

  return { isCreating, createBoard }
}