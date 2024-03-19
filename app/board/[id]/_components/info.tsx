import { useQuery } from "convex/react"
import { Id } from "@/convex/_generated/dataModel"
import { api } from "@/convex/_generated/api"
import Link from "next/link"
import UpdateBoardDialog from "@/app/(dashboard)/_components/dashboard/update-board-dialog"
import { Skeleton } from "@/components/ui/skeleton"

interface InfoProps {
  boardId: string
}

const Info = ({ boardId } : InfoProps) => {

  const data = useQuery(api.board.get_room, {id: boardId as Id<"boards">})

  return (
    <div 
      className="absolute top-3 left-3 py-2 px-3 shadow-md rounded-lg text-sm font-medium bg-white flex gap-x-4 items-center"
    >
      {data ? (
        <>
          <Link href="/">
            <h1 className="text-2xl font-bold">Miroproj</h1>
          </Link>
    
          <UpdateBoardDialog id={boardId}>
            {data?.title}
          </UpdateBoardDialog>
        </>
      ) : (
        <Skeleton className="h-8 w-[160px]"/>
      )}
    </div>
  )
}

export default Info