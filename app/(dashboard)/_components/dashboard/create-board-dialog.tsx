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
  const { isCreating, createBoard } = useCreateBoard()
  const [title, setTitle] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter"){
      createBoard(title)
    }
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="flex items-center gap-x-2">
          <PlusCircle className="w-4 h-4"/>
          Create board
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-y-6">
        <DialogTitle>Create a board</DialogTitle>

        <Input 
          type="text" 
          placeholder="Title" 
          className="border outline-none" 
          onChange={handleChange}
          onKeyDown={handleEnter}
          value={title}
        />

        <Button className="w-fit" onClick={() => createBoard(title)} disabled={isCreating}>
          {isCreating ? <Loader2 className="animate-spin"/> : "Create"}
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default CreateBoardDialog