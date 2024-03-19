import { Liveblocks } from "@liveblocks/node"
import { ConvexHttpClient } from "convex/browser"
import { api } from "@/convex/_generated/api"
import { auth, currentUser } from "@clerk/nextjs/server"

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

const liveblocks = new Liveblocks({
  secret: "sk_dev_jcnTjkv-I9x_4qxNQe8zHUxdiVn4t8HNcBFuvKrI8nEg4Q0lKeT2Q_h280XUZnST"
})

export async function POST(request: Request){
  const authorization = await auth()
  const user = await currentUser()

  if (!authorization || !user){
    return new Response("Unauthorized", {status: 403})
  }

  const { room } = await request.json()
  const board = await convex.query(api.board.get_room, { id: room })

  if (board?.orgId !== authorization.orgId){
    return new Response("Unauthorized", { status: 403 })
  }

  const userInfo = {
    name: user.firstName || "Anonymous",
    picture: user.imageUrl
  }

  const session = liveblocks.prepareSession(
    user.id, { userInfo }
  )

  room && session.allow(room, session.FULL_ACCESS)

  const { status, body } = await session.authorize();
  return new Response(body, { status })
}