import { CanvasMode } from "../canvas"
import ToolButton, { ToolButtonProps } from "./tool-btn"
import { Circle, Pencil, Redo, Square, Text, Undo } from "lucide-react"

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
      label:"Pencil",
      icon:Pencil,
      isDisabled:false,
      isActive:canvasState.mode === CanvasMode.None,
      onClick:() => {setCanvasState({mode: CanvasMode.None})}
    },
    {
      label:"Square",
      icon:Square,
      isDisabled:false,
      isActive:false,
      onClick:() => {}
    },
    {
      label:"Circle",
      icon:Circle,
      isDisabled:false,
      isActive:false,
      onClick:() => {}
    },
    {
      label:"Text",
      icon:Text,
      isDisabled:false,
      isActive:false,
      onClick:() => {}
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