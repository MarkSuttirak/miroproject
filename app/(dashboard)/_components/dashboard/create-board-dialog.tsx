import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChangeEvent, useState, KeyboardEvent } from "react"
import { Loader2, PlusCircle } from "lucide-react"
import { useCreateBoard } from "@/hooks/use-create-board"
  
const CreateBoardDialog = () => {
  const [title, setTitle] = useState<string>("")
  const [openDialog, setOpenDialog] = useState(false)
  const [error, setError] = useState(false)

  const { isCreating, createBoard } = useCreateBoard({
    whenDone: () => setOpenDialog(false)
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    setError(false)
  }

  const handleSubmit = () => {
    if (title === ""){
      setError(true)
    } else {
      setError(false)
      createBoard(title)
    }
  }

  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter"){
      handleSubmit()
    }
  }

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger>
        <Button className="flex items-center gap-x-2">
          <PlusCircle className="w-4 h-4"/>
          Create board
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-y-6">
        <DialogTitle>Create a board</DialogTitle>

        <div className="flex flex-col gap-y-1">
          <Input 
            type="text" 
            placeholder="Title" 
            className={`border outline-none ${error ? 'border-red-500' : ''}`} 
            onChange={handleChange}
            onKeyDown={handleEnter}
            value={title}
          />
          {error && <p className="text-red-500 text-xs">The title cannot be empty</p>}
        </div>

        <Button className="w-fit" onClick={handleSubmit} disabled={isCreating}>
          {isCreating ? <Loader2 className="animate-spin"/> : "Create"}
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default CreateBoardDialog