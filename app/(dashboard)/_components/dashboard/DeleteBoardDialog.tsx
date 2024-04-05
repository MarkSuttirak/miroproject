import BoardDialog from "@/components/BoardDialog" 
import { useDeleteBoard } from "@/hooks/use-delete-board"
import { Trash2 } from "lucide-react"
import { useState } from "react"

const DeleteBoardDialog = ({ id } : { id: any }) => {
  const [openDialog, setOpenDialog] = useState(false)

  const { isDeleting, deleteBoard } = useDeleteBoard({
    whenDone: () => setOpenDialog(false)
  })

  return (
    <BoardDialog
      id={id}
      trigger={
        <>
          <Trash2 className="w-4 h-4 mr-2"/>
          Delete
        </>
      }
      action="Delete"
      triggerClassName="w-full flex items-center py-1.5 px-2 text-sm"
      onSubmit={(val, id) => deleteBoard(id)}
      openDialog={openDialog}
      setOpenDialog={setOpenDialog}
      isSubmitting={isDeleting}
    />
  )
}

export default DeleteBoardDialog