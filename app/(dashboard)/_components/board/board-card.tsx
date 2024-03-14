"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"  
import { useAuth } from "@clerk/nextjs"
import { Heart } from "lucide-react"
import Link from "next/link"

interface BoardCardProps {
  title: string,
  id?: string,
  imageUrl: string,
  authorId: string,
  authorName: string
}

const BoardCard = ({
  title, 
  id, 
  imageUrl,
  authorId,
  authorName
} : BoardCardProps)  => {

  const { userId } = useAuth()
  const authorLabel = userId === authorId ? "You" : authorName

  return (

    <Link href={`/board/${id}`}>
      <Card>
        <CardHeader className="pb-2">

          <img src={imageUrl} className="w-full mb-4"/>
          <CardTitle>{title}</CardTitle>

        </CardHeader>
        <CardContent className="flex items-center justify-between">

          <p className="text-sm">Created by: {authorLabel}</p>
          <Heart />

        </CardContent>
      </Card>
    </Link>

  )
}

export default BoardCard