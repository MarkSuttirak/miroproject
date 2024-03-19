import { ReactNode, useState } from "react"
import { useUpdateBoard } from "@/hooks/use-update-board"
import BoardDialog from "@/components/board-dialog"
import { api } from "@/convex/_generated/api"
import { Edit } from "lucide-react"
import { useQuery } from "convex/react"

interface UpdateBoardDialogProps {
  id: any
  children?: ReactNode
}
  
const UpdateBoardDialog = ({ id, children } : UpdateBoardDialogProps) => {
  const data = useQuery(api.board.get)
  const selectData = data?.find(d => d._id === id)?.title
  const [openDialog, setOpenDialog] = useState(false)

  const { isUpdating, updateBoard } = useUpdateBoard({
    whenDone: () => setOpenDialog(false)
  })

  return (
    <BoardDialog 
      id={id}
      trigger={children || <>
        <Edit className="w-4 h-4 mr-2"/>
        Edit
      </>}
      triggerClassName="w-full flex items-center py-1.5 px-2 text-sm"
      action="Update"
      onSubmit={(title, id) => updateBoard(title, id)}
      isSubmitting={isUpdating}
      openDialog={openDialog}
      setOpenDialog={setOpenDialog}
      defaultValue={selectData}
    />
  )
}

export default UpdateBoardDialog