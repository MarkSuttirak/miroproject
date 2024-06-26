"use client"

import { formatDate } from "@/lib/utils"
import BoardCard from "./BoardCard"
import { BoardCardListProps } from "@/types"

const BoardCardList = ({ data, type } : BoardCardListProps) => {
  return (
    <>
      {type === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.map(d => (
            <BoardCard 
              imageUrl={d.imageUrl} 
              title={d.title} 
              key={d._id} 
              id={d._id} 
              authorName={d.authorName} 
              authorId={d.authorId}
              isFavourite={d.favourite}
              creationTime={formatDate(d._creationTime)}
              type={type}
            />
          ))}
        </div>
      )}

      {type === "list" && (
        <table>
          <tbody>
            {data?.map(d => (
              <BoardCard 
                imageUrl={d.imageUrl} 
                title={d.title} 
                key={d._id} 
                id={d._id} 
                authorName={d.authorName} 
                authorId={d.authorId}
                isFavourite={d.favourite}
                creationTime={formatDate(d._creationTime)}
                type={type}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default BoardCardList