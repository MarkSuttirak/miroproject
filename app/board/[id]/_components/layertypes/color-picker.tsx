"use client"

import { colorToCss } from "@/lib/utils"
import { Color } from "@/types/canvas"

interface ColorPickerProps {
  onChange: (color: Color) => void
}

export const ColorPicker = ({
  onChange
} : ColorPickerProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <ColorButton onClick={onChange} color={{ r: 0, g: 0, b: 0 }}/>
      <ColorButton onClick={onChange} color={{ r: 212, g: 51, b: 23 }}/>
      <ColorButton onClick={onChange} color={{ r: 54, g: 163, b: 75 }}/>
      <ColorButton onClick={onChange} color={{ r: 34, g: 82, b: 197 }}/>
    </div>
  )
}

interface ColorButtonProps {
  onClick: (color: Color) => void
  color: Color
}

const ColorButton = ({
  onClick, color
} : ColorButtonProps) => {
  return (
    <button 
      onClick={() => onClick(color)}
      className="h-8 w-8 items-center flex shadow-sm justify-center hover:opacity-75 transition" 
    >
      <div className='h-8 w-8 rounded-md' style={{ background: colorToCss(color)}} />
    </button>
  )
}