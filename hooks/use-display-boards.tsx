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

    const [dataDisplay, setDataDisplay] = useState<BoardCardType>("list")

    const displayBoardBtns: DisplayBoardBtns[] = [
        {
          icon: <LayoutGrid />,
          isActive: dataDisplay === "grid",
          onClick: () => setDataDisplay("grid")
        },
        {
          icon: <List />,
          isActive: dataDisplay === "list",
          onClick: () => setDataDisplay("list")
        },
      ]

    const BoardBtns = () => {
      return (
        <div className="flex gap-x-4 items-center">
          {displayBoardBtns.map((btn) => (
            <button onClick={btn.onClick} className={cn("p-2 rounded-md hover:bg-lightergray", {"bg-lightergray": btn.isActive})}>
             {btn.icon}
            </button>
          ))}
        </div>
      )
    }

  return { dataDisplay, BoardBtns }
}

export default useDisplayBoards