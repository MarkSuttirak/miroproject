import UpdateBoardDialog from "@/app/(dashboard)/_components/dashboard/UpdateBoardDialog"
import { metadata } from "@/app/layout"
import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { useQuery } from "convex/react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

interface BoardTopbarProps {
  boardId: string
}

const BoardTopbar = ({ boardId } : BoardTopbarProps) => {

  const data = useQuery(api.board.get_room, {id: boardId as Id<"boards">})

  useEffect(() => {
    if (data?.title){
      document.title = `${data?.title} - Baumeis`
    } else {
      document.title = `Baumeis`
    }
  }, [data?.title])

  return (
    <section className='h-12 grid grid-cols-3 items-center px-4 bg-darkpurple fade-in text-white'>
      <div className="flex items-center gap-x-2">
        <Link href="/" className='flex items-center gap-x-2 text-sm'>
          <ArrowLeft className='h-4 w-4'/>
          Back to Dashboard
        </Link>
      </div>

      <UpdateBoardDialog id={boardId}>
        <h1 className="w-full inline-flex justify-center">{data?.title}</h1>
      </UpdateBoardDialog>

      <div className='flex items-center gap-x-2 justify-end'>
        <Button className='h-8 px-3'>Save</Button>
      </div>
    </section>
  )
}

export default BoardTopbar