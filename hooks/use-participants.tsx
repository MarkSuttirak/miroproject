import { connectionIdToColor } from "@/lib/utils"
import UserAvatar from "@/components/UserAvatar"
import { useOthers, useSelf } from "@/liveblocks.config"

const useParticipants = () => {
    const users = useOthers()
    const currentUser = useSelf();

    const Participants = () => {
      return (
        <div className="absolute top-3 right-3 p-3 shadow-md rounded-lg text-sm font-medium bg-white">
          <div className="flex flex-col gap-3">
            {users.map(({ connectionId, info }) => (
                <UserAvatar key={connectionId} src={info?.picture} name={info?.name} fallback={info?.name?.[0] || "A"} borderColor={connectionIdToColor(connectionId)}/>
            ))}
    
            {currentUser && (
                <UserAvatar src={currentUser?.info?.picture} name={`${currentUser?.info?.name} (You)`} fallback={currentUser?.info?.name?.[0] || "A"} borderColor={connectionIdToColor(currentUser.connectionId)}/>
            )}
          </div>
        </div>
      )
    }

    return { users, Participants }
}

export default useParticipants