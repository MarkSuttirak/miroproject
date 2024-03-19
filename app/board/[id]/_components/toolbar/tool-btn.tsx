import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"  
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

export interface ToolButtonProps {
  icon: LucideIcon
  label: string
  onClick: () => void
  isDisabled: boolean
  isActive: boolean
}

const ToolButton = ({
  icon: Icon,
  label,
  onClick,
  isDisabled,
  isActive
} : ToolButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={onClick} disabled={isDisabled} className={cn('bg-white hover:bg-gray-100 text-black', {'bg-gray-100': isActive})}>
            <Icon />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default ToolButton