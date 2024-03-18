"use client"

import BoardActions from "@/app/(dashboard)/_components/dashboard/board-actions"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"  
import { useAuth } from "@clerk/nextjs"
import { Heart, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { api } from "@/convex/_generated/api"
import { useMutation } from "convex/react"
import { toast } from "@/components/ui/use-toast"

interface BoardCardProps {
  title: string
  id?: any
  imageUrl: string
  authorId: string
  authorName: string
  isFavourite: boolean
}

const BoardCard = ({
  title, 
  id, 
  imageUrl,
  authorId,
  authorName,
  isFavourite
} : BoardCardProps)  => {

  const { userId } = useAuth()
  const authorLabel = userId === authorId ? "You" : authorName
  const favourite = useMutation(api.board.favourite)

  const setFavourite = () => {
    favourite({
      id: id,
      favourite: !isFavourite
    }).then(() => {
      toast({ title: !isFavourite ? `Added ${title} to favourite` : `Removed ${title} from favourite` })
    })
    .catch(() => {
      toast({ title: "Failed to add to favourite" }) 
    })
  }

  return (
    <Card>
      <CardHeader className="pb-2 relative">
        <Link href={`/board/${id}`}>
          <img src={imageUrl} className="w-full !mb-2"/>

          <CardTitle className="text-xl overflow-hidden text-ellipsis">{title}</CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <p className="text-sm">Created by: {authorLabel}</p>

        <div className="flex items-center gap-x-2">
          <Heart className="cursor-pointer" fill={isFavourite ? "#f67171" : "transparent"} onClick={setFavourite}/>

          <BoardActions 
            id={id}
            side="bottom"
          >
            <MoreHorizontal />
          </BoardActions>
        </div>
      </CardContent>
    </Card>
  )
}

export default BoardCard