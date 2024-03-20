import { CanvasMode, LayerType } from "@/types/canvas"
import ToolButton, { ToolButtonProps } from "./tool-btn"
import { Circle, MousePointer, Pencil, Redo, Square, TextCursor, Undo } from "lucide-react"

type CanvasState = any

interface ToolbarProps {
  canvasState: CanvasState
  setCanvasState: (state: CanvasState) => void
  undo: () => void
  redo: () => void
  canUndo: boolean
  canRedo: boolean
}

export const Toolbar = ({ canvasState, setCanvasState, undo, redo, canUndo, canRedo }: ToolbarProps) => {
  const toolButtons: ToolButtonProps[] = [
    {
      label:"Select",
      icon:MousePointer,
      isActive:
        canvasState.mode === CanvasMode.Selection || 
        canvasState.mode === CanvasMode.None || 
        canvasState.mode === CanvasMode.Translating || 
        canvasState.mode === CanvasMode.Pressing || 
        canvasState.mode === CanvasMode.Resizing,
      onClick:() => {setCanvasState({mode: CanvasMode.Selection})}
    },
    {
      label:"Path",
      icon:Pencil,
      isActive:canvasState.mode === CanvasMode.Inserting && canvasState.layerType === LayerType.Path,
      onClick:() => {setCanvasState({mode: CanvasMode.Inserting, layerType: LayerType.Path})}
    },
    {
      label:"Square",
      icon:Square,
      isActive:canvasState.mode === CanvasMode.Inserting && canvasState.layerType === LayerType.Rectangle,
      onClick:() => {setCanvasState({mode: CanvasMode.Inserting, layerType: LayerType.Rectangle})}
    },
    {
      label:"Ellipse",
      icon:Circle,
      isActive:canvasState.mode === CanvasMode.Inserting && canvasState.layerType === LayerType.Ellipse,
      onClick:() => {setCanvasState({mode: CanvasMode.Inserting, layerType: LayerType.Ellipse})}
    },
    {
      label:"Text",
      icon:TextCursor,
      isActive:canvasState.mode === CanvasMode.Inserting && canvasState.layerType === LayerType.Text,
      onClick:() => {setCanvasState({mode: CanvasMode.Inserting, layerType: LayerType.Text})}
    },
    {
      label:"Undo",
      icon:Undo,
      isDisabled:!canUndo,
      isActive:false,
      onClick:undo
    },
    {
      label:"Redo",
      icon:Redo,
      isDisabled:!canRedo,
      isActive:false,
      onClick:redo
    }
  ]

  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-3 bg-white rounded-lg shadow-md">
      <div className="p-3 text-sm font-medium flex flex-col gap-y-2">
        {toolButtons.map(button => (
          <ToolButton 
            label={button.label}
            icon={button.icon}
            isDisabled={button.isDisabled}
            isActive={button.isActive}
            onClick={button.onClick}
          />
        ))}
      </div>
    </div>
  )
}