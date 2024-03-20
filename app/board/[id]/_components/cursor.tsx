"use client"

import { memo } from "react"
import { MousePointer2 } from "lucide-react"

import { useOther } from "@/liveblocks.config"
import { ConnectionIdToColor } from "@/lib/utils"

interface CursorProps {
  connectionId: number
}

export const Cursor = memo(({ connectionId } : CursorProps) => {
  const info = useOther(connectionId, (user) => user?.info)
  const cursor = useOther(connectionId, (user) => user?.presence.cursor)

  const name = info?.name || "Anonymous"

  if (!cursor) return null
  const { x, y } = cursor

  console.log(cursor)

  return (
    <foreignObject 
      style={{
        transform:`translateX(${x}px) translateY(${y}px)`
      }}
      height={50}
      width={50}
      className="relative drop-shadow-md"
    >
      <MousePointer2 
        className="h-5 w-5"
        fill={ConnectionIdToColor(connectionId)}
        stroke={ConnectionIdToColor(connectionId)}
      />
    </foreignObject>
  )
})