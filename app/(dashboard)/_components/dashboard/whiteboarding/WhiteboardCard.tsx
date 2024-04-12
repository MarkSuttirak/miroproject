import { WhiteboardCardProps } from "@/types"
import Image from "next/image"

const WhiteboardCard = ({ imageUrl, title, desc } : WhiteboardCardProps) => {
  return (
    <div className="rounded-xl flex bg-white overflow-hidden items-center justify-between">
      <div className="flex flex-col gap-y-3 pl-8">
        <h2 className="font-semibold text-[19px] text-left">{title}</h2>
        <p className="text-muted-foreground text-sm">{desc}</p>
      </div>

      <Image width={188} height={188} src={imageUrl} alt="whiteboarding" />
    </div>
  )
}

export default WhiteboardCard