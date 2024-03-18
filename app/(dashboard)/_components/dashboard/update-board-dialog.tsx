import { useState } from "react"
import { useUpdateBoard } from "@/hooks/use-update-board"
import BoardDialog from "@/components/board-dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Edit } from "lucide-react"
  
const UpdateBoardDialog = ({ id } : { id: any }) => {
  const [openDialog, setOpenDialog] = useState(false)

  const { isUpdating, updateBoard } = useUpdateBoard({
    whenDone: () => setOpenDialog(false)
  })

  return (
    <BoardDialog 
      id={id}
      trigger={
        <>
          <Edit className="w-4 h-4 mr-2"/>
          Edit
        </>
      }
      triggerClassName="w-full flex items-center py-1.5 px-2 text-sm"
      action="Update"
      onSubmit={(title, id) => updateBoard(title, id)}
      isSubmitting={isUpdating}
      openDialog={openDialog}
      setOpenDialog={setOpenDialog}
    />
  )
}

export default UpdateBoardDialog