import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"
import { useDeleteBoard } from "@/hooks/use-delete-board"
import { Edit, Trash2 } from "lucide-react"

interface ActionsProps {
    side?: DropdownMenuContentProps["side"]
    sideOffset?: DropdownMenuContentProps["sideOffset"]
    children: React.ReactNode
    title: string,
    id?: any
}

const BoardActions = ({
    side,
    sideOffset,
    children,
    title,
    id
} : ActionsProps) => {

  const { deleteBoard } = useDeleteBoard()

  return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          {children}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side={side}
          sideOffset={sideOffset}
          onClick={(e) => e.stopPropagation()}
        >
          <DropdownMenuItem onClick={() => deleteBoard(id)}>
            <Trash2 className="w-4 h-4 mr-2"/>
            Delete
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Edit className="w-4 h-4 mr-2"/>
            Edit
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default BoardActions