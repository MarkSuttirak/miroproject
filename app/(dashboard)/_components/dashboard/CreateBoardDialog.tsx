import { Button } from "@/components/ui/button"
import { ReactNode, useState } from "react"
import { PlusCircle } from "lucide-react"
import { useCreateBoard } from "@/hooks/use-create-board"
import BoardDialog from "@/components/BoardDialog"
import Image from "next/image"
import whiteboarding from "@/public/images/whiteboarding.png"
  
const CreateBoardDialog = ({ trigger } : { trigger: ReactNode | string }) => {
  const [openDialog, setOpenDialog] = useState(false)

  const { isCreating, createBoard } = useCreateBoard({
    whenDone: () => setOpenDialog(false)
  })

  return (
    <BoardDialog 
      trigger={
        // <Button className="flex items-center gap-x-2">
        //   <PlusCircle className="w-4 h-4"/>
        //   Create board
        // </Button>
        trigger
      }
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