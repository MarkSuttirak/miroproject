import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  

interface UserAvatarProps {
  src?: string
  name?: string
  fallback?: string
  borderColor?: string
}

const UserAvatar = ({ src, name, fallback, borderColor } : UserAvatarProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Avatar
            style={{ borderColor }}
          >
            <AvatarImage src={src} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent side="left">
          {name || "Anonymous"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default UserAvatar