import { WhiteboardCardProps } from "@/types"
import Image from "next/image"

const WhiteboardCard = ({ imageUrl, title, desc } : WhiteboardCardProps) => {
  return (
    <div className="rounded-xl flex bg-white overflow-hidden items-end justify-between h-full">
      <div className="flex flex-col gap-y-3 pl-8 text-left h-full justify-center">
        <h2 className="font-semibold text-[19px]">{title}</h2>
        <p className="text-muted-foreground text-sm">{desc}</p>
      </div>

      <Image width={188} height={188} src={imageUrl} alt="whiteboarding" className="h-full w-auto max-h-[188px]" />
    </div>
  )
}

export default WhiteboardCard