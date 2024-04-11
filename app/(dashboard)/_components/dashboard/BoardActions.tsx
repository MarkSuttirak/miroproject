import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UpdateBoardDialog from "./UpdateBoardDialog"
import DeleteBoardDialog from "./DeleteBoardDialog"
import { ActionsProps } from "@/types"

const BoardActions = ({
  side,
  sideOffset,
  children,
  id,
  title,
  className
} : ActionsProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className}>
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