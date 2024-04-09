import { formatDate } from "@/lib/utils"
import BoardCard from "./BoardCard"
import BoardActions from "./BoardActions"
import { MoreHorizontal } from "lucide-react"

interface BoardCardListProps {
  data: any[]
  type: string
}

const BoardCardList = ({ data, type } : BoardCardListProps) => {
    return (
      <>
        {type === "block" && (
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
              />
            ))}
          </div>
        )}

        {type === "list" && (
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Author</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map(d => (
                <tr key={d._id} id={d._id}>
                  <td className="text-center">
                    <img src={d.imageUrl}/>
                  </td>
                  <td className="text-center">{d.title}</td>
                  <td className="text-center">{d.authorName}</td>
                  <td className="text-center">{formatDate(d._creationTime)}</td>
                  <td className="text-center">
                    <BoardActions
                      id={d._id}
                      side="bottom"
                    >
                      <MoreHorizontal className="rotate-90"/>
                    </BoardActions>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    )
}

export default BoardCardList