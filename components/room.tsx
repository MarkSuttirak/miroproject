"use client"

import { ReactNode } from "react"
import { RoomProvider } from "@/liveblocks.config"
import { ClientSideSuspense } from "@liveblocks/react"

interface RoomProps {
  children: ReactNode
  roomId: string
  fallBack: NonNullable<ReactNode> | null
}

export const Room = ({ children, roomId, fallBack } : RoomProps) => {
  return (
    <RoomProvider
      id={roomId}
      initialPresence={{}}
    >
      <ClientSideSuspense fallback={fallBack}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  )
}