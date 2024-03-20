"use client"

import { ReactNode } from "react"
import { RoomProvider } from "@/liveblocks.config"
import { ClientSideSuspense } from "@liveblocks/react"
import { LiveMap, LiveObject, LiveList } from "@liveblocks/client"
import { Layer } from "@/types/canvas";

interface RoomProps {
  children: ReactNode
  roomId: string
  fallBack: NonNullable<ReactNode> | null
}

export const Room = ({ children, roomId, fallBack } : RoomProps) => {
  return (
    <RoomProvider
      id={roomId}
      initialPresence={{
        cursor: null
      }}
      initialStorage={{
        layers: new LiveMap<string, LiveObject<Layer>>(),
        layerIds: new LiveList()
      }}
    >
      <ClientSideSuspense fallback={fallBack}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  )
}