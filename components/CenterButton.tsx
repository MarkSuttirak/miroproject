import { CenterButtonProps } from "@/types"

const CenterButton = ({ icon, title, desc } : CenterButtonProps) => {
  return (
    <div className="add-board">
    {icon}

    <div>
      <h2 className="text-[#18181B] text-base font-medium">{title}</h2>
      <p className="text-xs font-medium text-muted-foreground">{desc}</p>
    </div>
  </div>
  )
}

export default CenterButton