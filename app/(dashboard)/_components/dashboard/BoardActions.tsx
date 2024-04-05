import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"
import UpdateBoardDialog from "./UpdateBoardDialog"
import DeleteBoardDialog from "./DeleteBoardDialog"

interface ActionsProps {
  side?: DropdownMenuContentProps["side"]
  sideOffset?: DropdownMenuContentProps["sideOffset"]
  children: React.ReactNode
  id?: any
  title?: string
}

const BoardActions = ({
  side,
  sideOffset,
  children,
  id,
  title
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