"use client"

import BoardActions from "@/app/(dashboard)/_components/dashboard/board-actions"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"  
import { useAuth } from "@clerk/nextjs"
import { Heart, MoreHorizontal } from "lucide-react"
import Link from "next/link"

interface BoardCardProps {
  title: string
  id?: string
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

  return (
    <Link href={`/board/${id}`}>
      <Card>
        <CardHeader className="pb-2 relative">
          <img src={imageUrl} className="w-full !mb-2"/>

          <CardTitle className="text-xl overflow-hidden text-ellipsis">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <p className="text-sm">Created by: {authorLabel}</p>

          <div className="flex items-center gap-x-2">
            <Heart fill={isFavourite ? "#f67171" : "transparent"}/>

            <BoardActions 
              id={id}
              title={title}
              side="bottom"
            >
              <MoreHorizontal />
            </BoardActions>
          </div>
        </CardContent>
      </Card>
    </Link>

  )
}

export default BoardCard