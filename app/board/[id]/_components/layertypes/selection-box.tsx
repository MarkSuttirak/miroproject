"use client"

import { useSelectionBounds } from "@/hooks/use-selection-bounds"
import { useSelf, useStorage } from "@/liveblocks.config"
import { LayerType, Side, XYWH } from "@/types/canvas"
import { memo } from "react"

interface SelectionBoxProps {
  onResizeHandlePointDown: (corner: Side, initialBounds: XYWH) => void
}

const handle_width = 8

export const SelectionBox = ({
  onResizeHandlePointDown 
} : SelectionBoxProps) => {

  const soleLayerId = useSelf((me) => me.presence.selection.length === 1 ? me.presence.selection[0] : null)
  const isShowingHandles = useStorage((root) => soleLayerId && root.layers.get(soleLayerId)?.type !== LayerType.Path)
  const bounds = useSelectionBounds()

  if (!bounds) return null

  return (
    <>
      <rect 
        className="fill-transparent stroke-blue-500 stroke-1 pointer-events-none"
        style={{transform:`translate(${bounds.x}px, ${bounds.y}px)`}}
        x={0}
        y={0}
        width={bounds.width}
        height={bounds.height}
      />
      {isShowingHandles && (
        <>
          <rect 
            className="fill-white stroke-blue-500 stroke-1"
            x={0}
            y={0}
            style={{
              cursor: "nwse-resize",
              width: `${handle_width}px`,
              height: `${handle_width}px`,
              transform: `translate(${bounds.x - handle_width / 2}px, ${bounds.y - handle_width / 2}px)`
            }}
            onPointerDown={(e) => {
              e.stopPropagation()
              onResizeHandlePointDown(Side.Top + Side.Left, bounds)
            }}
          />
          <rect 
            className="fill-white stroke-blue-500 stroke-1"
            x={0}
            y={0}
            style={{
              cursor: "ns-resize",
              width: `${handle_width}px`,
              height: `${handle_width}px`,
              transform: `translate(${bounds.x + bounds.width / 2 - handle_width / 2}px, ${bounds.y - handle_width / 2}px)`
            }}
            onPointerDown={(e) => {
              e.stopPropagation()
              onResizeHandlePointDown(Side.Top, bounds)
            }}
          />
          <rect 
            className="fill-white stroke-blue-500 stroke-1"
            x={0}
            y={0}
            style={{
              cursor: "nesw-resize",
              width: `${handle_width}px`,
              height: `${handle_width}px`,
              transform: `translate(${bounds.x + bounds.width - handle_width / 2}px, ${bounds.y - handle_width / 2}px)`
            }}
            onPointerDown={(e) => {
              e.stopPropagation()
              onResizeHandlePointDown(Side.Top + Side.Right, bounds)
            }}
          />
          <rect 
            className="fill-white stroke-blue-500 stroke-1"
            x={0}
            y={0}
            style={{
              cursor: "ew-resize",
              width: `${handle_width}px`,
              height: `${handle_width}px`,
              transform: `translate(${bounds.x + bounds.width - handle_width / 2}px, ${bounds.y + bounds.height / 2 - handle_width / 2}px)`
            }}
            onPointerDown={(e) => {
              e.stopPropagation()
              onResizeHandlePointDown(Side.Right, bounds)
            }}
          />
          <rect 
            className="fill-white stroke-blue-500 stroke-1"
            x={0}
            y={0}
            style={{
              cursor: "nwse-resize",
              width: `${handle_width}px`,
              height: `${handle_width}px`,
              transform: `translate(${bounds.x + bounds.width - handle_width / 2}px, ${bounds.y + bounds.height - handle_width / 2}px)`
            }}
            onPointerDown={(e) => {
              e.stopPropagation()
              onResizeHandlePointDown(Side.Bottom + Side.Right, bounds)
            }}
          />
          <rect 
            className="fill-white stroke-blue-500 stroke-1"
            x={0}
            y={0}
            style={{
              cursor: "ns-resize",
              width: `${handle_width}px`,
              height: `${handle_width}px`,
              transform: `translate(${bounds.x + bounds.width / 2 - handle_width / 2}px, ${bounds.y + bounds.height - handle_width / 2}px)`
            }}
            onPointerDown={(e) => {
              e.stopPropagation()
              onResizeHandlePointDown(Side.Bottom, bounds)
            }}
          />
          <rect 
            className="fill-white stroke-blue-500 stroke-1"
            x={0}
            y={0}
            style={{
              cursor: "nesw-resize",
              width: `${handle_width}px`,
              height: `${handle_width}px`,
              transform: `translate(${bounds.x - handle_width / 2}px, ${bounds.y + bounds.height - handle_width / 2}px)`
            }}
            onPointerDown={(e) => {
              e.stopPropagation()
              onResizeHandlePointDown(Side.Bottom + Side.Left, bounds)
            }}
          />
          <rect 
            className="fill-white stroke-blue-500 stroke-1"
            x={0}
            y={0}
            style={{
              cursor: "ew-resize",
              width: `${handle_width}px`,
              height: `${handle_width}px`,
              transform: `translate(${bounds.x - handle_width / 2}px, ${bounds.y + bounds.height / 2 - handle_width / 2}px)`
            }}
            onPointerDown={(e) => {
              e.stopPropagation()
              onResizeHandlePointDown(Side.Left, bounds)
            }}
          />
        </>
      )}
    </>
  )
}