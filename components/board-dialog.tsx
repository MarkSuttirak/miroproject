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
import { ChangeEvent, useState, KeyboardEvent, ReactNode } from "react"
import { Loader2 } from "lucide-react"

type Action = "Update" | "Create" | "Delete"

interface BoardDialogProps {
  id?: any
  trigger?: string | ReactNode
  triggerClassName?: string
  action: Action
  onSubmit: (val: string, id: any) => void
  isSubmitting: boolean,
  openDialog: boolean,
  setOpenDialog: (val: boolean) => void
}

const BoardDialog = ({ 
  id,
  trigger,
  triggerClassName,
  action, 
  onSubmit,
  isSubmitting,
  openDialog,
  setOpenDialog
} : BoardDialogProps) => {

  const [title, setTitle] = useState<string>("")
  const [error, setError] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    setError(false)
  }

  const handleSubmit = () => {
    action !== "Delete" && ( title === "" ? setError(true) : setError(false) )
    onSubmit && onSubmit(title, id)
  }

  const handleEnter = (e: KeyboardEvent) => e.key === "Enter" && handleSubmit()

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger className={triggerClassName}>
        {trigger}
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-y-6">
        <DialogTitle>{action === "Update" ? "Update a board" : action === "Create" ? "Create a board" : "Are you sure you want to delete? "}</DialogTitle>

        {action !== "Delete" ? (
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
        ) : (
          <DialogDescription>
            Deleting this board cannot be undone.
          </DialogDescription>
        )}

        <Button className="w-fit" onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="animate-spin"/> : action}
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default BoardDialog