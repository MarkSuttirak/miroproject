"use client"

import { useSelectionBounds } from "@/hooks/use-selection-bounds"
import { useMutation, useSelf } from "@/liveblocks.config"
import { Camera, Color } from "@/types/canvas"
import { memo } from "react"
import { ColorPicker } from "./color-picker"
import { useDeleteLayers } from "@/hooks/use-delete-layers"
import { BringToFront, SendToBack, Trash2 } from "lucide-react"

interface SelectionToolsProps {
  camera: Camera
  setLastUsedColor: (color: Color) => void
}

export const SelectionTools = memo((
  { camera, setLastUsedColor }: SelectionToolsProps
) => {

  const deleteLayers = useDeleteLayers()

  const selection = useSelf((me) => me.presence.selection)

  const sendToFront = useMutation(({ storage }) => {
    const liveLayerIds = storage.get("layerIds")
    const indices: number[] = []

    const arr = liveLayerIds.toArray();

    for (let i = 0; i < arr.length; i++){
      if (selection.includes(arr[i])){
        indices.push(i)
      }
    }

    for (let i = 0; i < indices.length; i++){
      liveLayerIds.move(indices[i], arr.length - 1 - (indices.length - 1 - i))
    }
  }, [selection])

  const moveToBack = useMutation(({ storage }) => {
    const liveLayerIds = storage.get("layerIds")
    const indices: number[] = []

    const arr = liveLayerIds.toArray();

    for (let i = 0; i < arr.length; i++){
      if (selection.includes(arr[i])){
        indices.push(i)
      }
    }

    for (let i = 0; i < indices.length; i++){
      liveLayerIds.move(indices[i], i)
    }
  }, [selection])

  const setFill = useMutation(({ storage }, fill: Color) => {
    const liveLayers = storage.get("layers")
    setLastUsedColor(fill)

    selection.forEach((id) => {
      liveLayers.get(id)?.set("fill", fill)
    })
  }, [selection, setLastUsedColor])

  const selectionBounds = useSelectionBounds()

  if (!selectionBounds) return null

  const x = selectionBounds.width / 2 + selectionBounds.x + camera.x
  const y = selectionBounds.y + camera.y

  return (
    <div 
      className="absolute p-3 rounded-xl bg-white shadow-sm border flex select-none items-center gap-x-2"
      style={{
        transform:`translate(calc(${x}px - 50%), calc(${y - 16}px - 100%))`
      }}
    >
      <div className="pr-4">
        <ColorPicker onChange={setFill}/>
      </div>

      <div className="flex items-center gap-x-4 border-l pl-4">
        <Trash2 onClick={deleteLayers}/>
        <BringToFront onClick={sendToFront}/>
        <SendToBack onClick={moveToBack}/>
      </div>

    </div>
  )
})

SelectionTools.displayName = "SelectionTools"