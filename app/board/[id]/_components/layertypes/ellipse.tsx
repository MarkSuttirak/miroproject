import { EllipseLayer } from "@/types/canvas"

interface EllipseProps {
  id: string
  layer: EllipseLayer
  onPointerDown: (e: React.PointerEvent, id: string) => void
  selectionColor?: string
}

export const Ellipse = ({
  id,
  layer,
  onPointerDown,
  selectionColor
} : EllipseProps) => {
  const { x, y, width, height, fill } = layer

  return (
    <ellipse 
      className="drop-shadow-md" 
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        transform:`translate(${x}px, ${y}px)`
      }}
      rx={0}
      ry={0}
      width={width}
      height={height}
      strokeWidth={1}
      fill="#000"
      stroke="transparent"
    />
  )
}