import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"
import UpdateBoardDialog from "./update-board-dialog"
import DeleteBoardDialog from "./delete-board-dialog"

interface ActionsProps {
  side?: DropdownMenuContentProps["side"]
  sideOffset?: DropdownMenuContentProps["sideOffset"]
  children: React.ReactNode
  id?: any
}

const BoardActions = ({
  side,
  sideOffset,
  children,
  id
} : ActionsProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {children}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side={side}
        sideOffset={sideOffset}
      >
        <DropdownMenuItem asChild>
          <DeleteBoardDialog id={id} />
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <UpdateBoardDialog id={id}/>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default BoardActions