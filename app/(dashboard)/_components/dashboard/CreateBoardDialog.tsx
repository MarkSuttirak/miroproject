import { ReactNode, useState } from "react"
import { useCreateBoard } from "@/hooks/use-create-board"
import BoardDialog from "@/components/BoardDialog"

interface CreateBoardDialogProps {
  trigger: ReactNode | string
  triggerClassName?: string
}
  
const CreateBoardDialog = ({ trigger, triggerClassName } : CreateBoardDialogProps) => {
  const [openDialog, setOpenDialog] = useState(false)

  const { isCreating, createBoard } = useCreateBoard({
    whenDone: () => setOpenDialog(false)
  })

  return (
    <BoardDialog 
      trigger={trigger}
      triggerClassName={triggerClassName}
      action="Create"
      onSubmit={(title) => createBoard(title)}
      isSubmitting={isCreating}
      openDialog={openDialog}
      setOpenDialog={setOpenDialog}
      defaultValue=""
    />
  )
}

export default CreateBoardDialog