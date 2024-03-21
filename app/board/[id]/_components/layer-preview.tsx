import { useStorage } from "@/liveblocks.config"
import { LayerType } from "@/types/canvas"
import { memo } from "react"
import { Rectangle } from "./layertypes/rectangle"
import { Ellipse } from "./layertypes/ellipse"

interface LayerPreviewProps {
  id: string
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void
  selectionColor?: string
}

export const LayerPreview = memo(({
  id,
  onLayerPointerDown,
  selectionColor
} : LayerPreviewProps) => {

  const layer = useStorage(root => root.layers.get(id))

  if (!layer) return null;

  switch (layer.type){
    case LayerType.Rectangle:
      return (
        <Rectangle 
          id={id}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
          layer={layer}
        />
      )
      case LayerType.Ellipse:
        return (
          <Ellipse 
            id={id}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
            layer={layer}
          />
        )
    default:
      console.warn("UNKNOWN")
      return null
  }
})