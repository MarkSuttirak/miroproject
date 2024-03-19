"use client"

import Info from "./info"
import Participants from "./participants"
import { useHistory, useCanRedo, useCanUndo } from "@/liveblocks.config"
import { Toolbar } from "./toolbar"
import { useState } from "react"

interface CanvasProps {
  boardId: string
}

export type CanvasState = {
  mode: CanvasMode.None
}

export enum CanvasMode {
  None
}

const Canvas = ({ boardId } : CanvasProps) => {

  const history = useHistory()
  const canUndo = useCanUndo()
  const canRedo = useCanRedo()

  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None
  })

  return (
    <main className="h-full w-full relative bg-gray-100 touch-none">
      <Info boardId={boardId}/>
      <Participants />
      <Toolbar 
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        undo={history.undo}
        redo={history.redo}
      />
    </main>
  )
}

export default Canvas