import BoardCard from "./board-card"
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"

interface FilterProps {
    filter: () => void
}

const BoardList = ({filter} : FilterProps) => {

  const data = useQuery(api.board.get)
  const filterData = data?.filter(filter)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {filterData?.map(d => (
        <BoardCard 
          imageUrl={d.imageUrl} 
          title={d.title} 
          key={d._id} 
          id={d._id} 
          authorName={d.authorName} 
          authorId={d.authorId}
          isFavourite={d.favourite}
        />
      ))}
    </div>
  )
}

export default BoardList