import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ActionsProps {
    side: string
    sideOffset: number
    children: React.ReactNode
    title: string,
    id?: string
}

const Actions = ({
    side,
    sideOffset,
    children,
    title,
    id
} : ActionsProps) => {
  return (
      <DropdownMenu>
        <DropdownMenuTrigger>
            {children}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default Actions