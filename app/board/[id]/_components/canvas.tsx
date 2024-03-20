"use client"

import Info from "./info"
import Participants from "./participants"
import { useHistory, useCanRedo, useCanUndo, useMutation } from "@/liveblocks.config"
import { Toolbar } from "./toolbar"
import { useCallback, useState } from "react"
import { CanvasState, CanvasMode, Camera } from "@/types/canvas"
import { CursorsPresence } from "./cursors-presence"

interface CanvasProps {
  boardId: string
}

const Canvas = ({ boardId } : CanvasProps) => {

  const history = useHistory()
  const canUndo = useCanUndo()
  const canRedo = useCanRedo()

  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 })

  const onWheel = useCallback((e: React.WheelEvent) => {
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY,
    }))
  }, [])

  const onPointerMove = useMutation(({ setMyPresence }, e:React.PointerEvent ) => {
    e.preventDefault()

    const current = { x: 0, y: 0 }
    setMyPresence({ cursor: current })
  }, [])

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
      <svg className="h-screen w-screen" onWheel={onWheel} onPointerMove={onPointerMove}>
        <g>
          <CursorsPresence />
        </g>
      </svg>
    </main>
  )
}

export default Canvas