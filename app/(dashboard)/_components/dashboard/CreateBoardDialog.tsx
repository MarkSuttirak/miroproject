import { Button } from "@/components/ui/button"
import { useState } from "react"
import { PlusCircle } from "lucide-react"
import { useCreateBoard } from "@/hooks/use-create-board"
import BoardDialog from "@/components/BoardDialog"
  
const CreateBoardDialog = () => {
  const [openDialog, setOpenDialog] = useState(false)

  const { isCreating, createBoard } = useCreateBoard({
    whenDone: () => setOpenDialog(false)
  })

  return (
    <BoardDialog 
      trigger={
        <Button className="flex items-center gap-x-2">
          <PlusCircle className="w-4 h-4"/>
          Create board
        </Button>
      }
      action="Create"
      onSubmit={(title) => createBoard(title)}
      isSubmitting={isCreating}
      openDialog={openDialog}
      setOpenDialog={setOpenDialog}
    />
  )
}

export default CreateBoardDialog