"use client"

import BoardActions from "@/app/(dashboard)/_components/dashboard/BoardActions"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"  
import { useAuth } from "@clerk/nextjs"
import { Heart, MoreHorizontal, Star } from "lucide-react"
import Link from "next/link"
import { api } from "@/convex/_generated/api"
import { useMutation } from "convex/react"
import { toast } from "@/components/ui/use-toast"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { BoardCardProps } from "@/types"
import { useRouter } from "next/navigation"

const BoardCard = ({
  title, 
  id, 
  imageUrl,
  authorId,
  authorName,
  isFavourite,
  creationTime,
  type
} : BoardCardProps) => {

  const { userId } = useAuth()
  const authorLabel = userId === authorId ? "You" : authorName
  const favourite = useMutation(api.board.favourite)
  const router = useRouter()

  const setFavourite = () => {
    favourite({
      id: id,
      favourite: !isFavourite
    }).then(() => {
      toast({ title: !isFavourite ? `Added ${title} to favorite` : `Removed ${title} from favorite` })
    })
    .catch(() => {
      toast({ title: "Failed to add to favorite" }) 
    })
  }

  return (
    <>
      {type === "grid" && (
        <Card className="shadow-none border-none group relative">
          <Link href={`/board/${id}`}>
            <CardHeader className="pb-2 relative bg-lightergray rounded-xl p-[100px]">
              <Image src={imageUrl} className="w-full" alt={title} width={100} height={100}/>
            </CardHeader>
          </Link>
          <CardContent className="flex items-center justify-between">
            <div>
              <CardTitle className="text-sm overflow-hidden text-ellipsis">{title}</CardTitle>
              <CardDescription className="text-[13px]">Created {creationTime}</CardDescription>
            </div>
            <div className="flex items-center gap-x-2">
              <button className={cn("bg-black/50 p-2 rounded-md absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity", {"opacity-100": isFavourite})} onClick={setFavourite}>
                <Star fill={isFavourite ? "#FFC700" : "transparent"} stroke={isFavourite ? "#FFC700" : "white"}/>
              </button>

              <BoardActions 
                id={id}
                side="bottom"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <MoreHorizontal className="rotate-90"/>
              </BoardActions>
            </div>
          </CardContent>
        </Card>
      )}

      {type === "list" && (
        <tr id={id} className="hover:bg-lightergray rounded-md cursor-pointer">
          <td className="text-center p-4 pl-0 text-sm rounded-l-lg" width="5%">
            <button onClick={setFavourite}>
              <Star fill={isFavourite ? "#FFC700" : "transparent"} stroke={isFavourite ? "#FFC700" : "#71717A"} strokeWidth={1.5}/>
            </button>
          </td>
          <td className="text-left p-4 pl-0" width="10%" onClick={() => router.push(`/board/${id}`)}>
            <Image src={imageUrl} className="w-full bg-lightergray p-3 h-20 rounded-lg" alt={title} width={100} height={100}/>
          </td>
          <td className="text-left p-4 text-sm font-semibold" width="30%" onClick={() => router.push(`/board/${id}`)}>
            {title}
          </td>
          <td className="text-left p-4 text-sm text-muted-foreground" width="30%" onClick={() => router.push(`/board/${id}`)}>Created {creationTime}</td>
          <td className="text-right p-4 rounded-r-lg">
            <BoardActions
              id={id}
              side="bottom"
            >
              <MoreHorizontal className="rotate-90"/>
            </BoardActions>
          </td>
        </tr>
      )}
    </>
  )
}

export default BoardCard