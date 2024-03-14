"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"  

interface BoardCardProps {
  title: string,
  id: string,
  imageUrl: string,
  author: string
}

const BoardCard = ({
  title, 
  id, 
  imageUrl,
  author
} : BoardCardProps)  => {
  return (

    <Card>
      <CardHeader>
        <CardTitle>
          <img src={imageUrl} />
        </CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Created by: {author}</p>
      </CardFooter>
    </Card>

  )
}

export default BoardCard