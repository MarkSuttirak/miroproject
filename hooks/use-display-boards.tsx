import { cn } from "@/lib/utils"
import { BoardCardType } from "@/types"
import { LayoutGrid, List } from "lucide-react"
import { ReactNode, useState } from "react"

type DisplayBoardBtns = {
    icon: ReactNode
    isActive: boolean
    onClick: () => void
}

const useDisplayBoards = () => {
    const [dataDisplay, setDataDisplay] = useState<BoardCardType>(localStorage.getItem("data-display") || "grid")

    const handleDisplay = (display: BoardCardType) => {
      setDataDisplay(display)
      localStorage.setItem("data-display", display)
    }

    const displayBoardBtns: DisplayBoardBtns[] = [
        {
          icon: <LayoutGrid className="h-4 w-4 stroke-[1.5]"/>,
          isActive: dataDisplay === "grid",
          onClick: () => handleDisplay("grid")
        },
        {
          icon: <List className="h-4 w-4 stroke-[1.5]"/>,
          isActive: dataDisplay === "list",
          onClick: () => handleDisplay("list")
        },
      ]

    const BoardBtns = () => {
      return (
        <div className="flex gap-x-2 items-center">
          {displayBoardBtns.map((btn, index) => (
            <button key={index} onClick={btn.onClick} className={cn("p-1 rounded-md hover:bg-lightergray", {"bg-lightergray": btn.isActive})}>
             {btn.icon}
            </button>
          ))}
        </div>
      )
    }

  return { dataDisplay, BoardBtns }
}

export default useDisplayBoards