"use client"

import { api } from "@/convex/_generated/api"
import { useMutation, useQuery } from "convex/react"
import { Loading } from "@/components/loading"
import { useOrganization } from "@clerk/nextjs"
import BoardCard from "../_components/board/board-card"
import { toast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { useCreateBoard } from "@/hooks/use-create-board"

const Board = () => {
  const data = useQuery(api.board.get)
  const { organization } = useOrganization()
  const createBoard = useCreateBoard()

  const orgName = organization?.name

  const filterData = data?.filter(org => 
    org.orgName === orgName
  )

  const CreateButton = () => {
    return (
      <Button onClick={() => createBoard("Testagain")} className="flex items-center gap-x-2">
        <PlusCircle className="w-4 h-4"/>
        Create a board
      </Button>
    )
  }

  return (
    <>
      {data === undefined && !organization ? (
        <Loading />
      ) : (
        <>
          {data?.length === 0 ? (
            <div className="flex flex-col items-center h-[60vh] w-full justify-center gap-y-4">
              <h1 className="dashboard-title">No boards</h1>
              <p>Create your first board to get started.</p>

              <CreateButton />
            </div>
          ) : (
            <section className="flex flex-col gap-y-8">

              <div className="flex items-center justify-between">
                <h1 className="dashboard-title">My boards</h1>
                <CreateButton />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {filterData?.map(d => (
                  <BoardCard 
                    imageUrl={d.imageUrl} 
                    title={d.title} 
                    key={d._id} 
                    id={d._id} 
                    authorName={d.authorName} 
                    authorId={d.authorId}
                  />
                ))}
              </div>

            </section>
          )}
        </>
      )}
    </>
  ) 
}

export default Board