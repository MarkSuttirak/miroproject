import { Room } from "@/components/room"
import Canvas from "./_components/canvas"
import { Loading } from "@/components/loading"

interface BoardIdProps {
  params: {
    id: string
  }
}

const BoardId = ({params} : BoardIdProps) => {
  return (
    <Room roomId={params.id} fallBack={<Loading />}>
      <div className="h-screen fade-in">
        <Canvas boardId={params.id}/>
      </div>
    </Room>
  )
}

export default BoardId