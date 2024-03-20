"use client"

import Info from "./info"
import Participants from "./participants"
import { useHistory, useCanRedo, useCanUndo, useMutation, useStorage } from "@/liveblocks.config"
import { Toolbar } from "./toolbar"
import { useCallback, useState } from "react"
import { CanvasState, CanvasMode, Camera, Color, LayerType, Point } from "@/types/canvas"
import { CursorsPresence } from "./cursors-presence"
import { pointerToCanvas } from "@/lib/utils"

interface CanvasProps {
  boardId: string
}

const MAX_LAYERS = 100

const Canvas = ({ boardId } : CanvasProps) => {

  const layerIds = useStorage((root) => root.layerIds)
  const history = useHistory()
  const canUndo = useCanUndo()
  const canRedo = useCanRedo()

  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 })
  const [lastUsedColor, setLastUsedColor] = useState<Color>({
    r: 0, g: 0, b: 0
  })

  const insertLayer = useMutation((
    { storage, setMyPresence }, 
    layerType: LayerType.Ellipse | LayerType.Path | LayerType.Rectangle | LayerType.Text,
    position: Point
  ) => {
    const liveLayers = storage.get("layers")
    
    if (liveLayers.size >= MAX_LAYERS){
      return
    }

    const liveLayerIds = storage.get("layerIds")
    const layerId = 0
  }, [])

  const onWheel = useCallback((e: React.WheelEvent) => {
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY,
    }))
  }, [])

  const onPointerMove = useMutation(({ setMyPresence }, e:React.PointerEvent ) => {
    e.preventDefault()

    const current = pointerToCanvas(e, camera)

    setMyPresence({ cursor: current })
  }, [])

  const onPointerLeave = useMutation(({ setMyPresence }) => {
    setMyPresence({ cursor: null })
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
      <svg className="h-[100vh] w-[100vw]" onWheel={onWheel} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
        <g>
          <CursorsPresence />
        </g>
      </svg>
    </main>
  )
}

export default Canvas