import { useStorage } from "@/liveblocks.config"
import { LayerType } from "@/types/canvas"
import { memo } from "react"
import { Rectangle } from "./layertypes/rectangle"
import { Ellipse } from "./layertypes/ellipse"
import { Text } from "./layertypes/text"
import { Path } from "./layertypes/path"
import { colorToCss } from "@/lib/utils"

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
    case LayerType.Path:
      return (
        <Path 
          key={id}
          points={layer.points}
          x={layer.x}
          y={layer.y}
          onPointerDown={(e) => onLayerPointerDown(e, id)}
          fill={layer.fill ? colorToCss(layer.fill) : "#000"}
          stroke={selectionColor}
        />
      )
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
    case LayerType.Text:
      return (
        <Text 
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