import { useMutation, useQuery } from "convex/react"
import { useOrganization } from "@clerk/nextjs"
import { api } from "@/convex/_generated/api"
import { toast } from "@/components/ui/use-toast"

export const useCreateBoard = () => {
    const { organization } = useOrganization()
    const create = useMutation(api.board.create)

    const createBoard = (title: string) => {
        if (!organization) return

        create({
          title: title,
          orgName: organization.name,
          orgId: organization.id,
          favourite: false
        }).then(() => {
            toast({
              title:"Board created"
            })
        }).catch(() => {
            toast({
              title:"Failed to create a board"
            })
        })
    }

    return createBoard
}
