import { cn } from "@/lib/utils"

interface LoadingProps {
  isFullScreen?: boolean
}

export const Loading = ({ isFullScreen } : LoadingProps) => {

  const bgGradient = {
    background:"linear-gradient(90deg, rgba(52,128,254,1) 0%, rgba(255,92,0,1) 50%, rgba(255,187,0,1) 100%)"
  }

  return (
    <div className={cn("w-full flex items-center justify-center flex-col gap-y-6", {"h-screen": isFullScreen})}>
      <div className="animate-spin w-12 h-12 flex justify-center items-center rounded-full" style={bgGradient}>
        <div className="bg-white w-10 h-10 rounded-full" />
      </div>

      <h1 className="text-[#3480FE] text-lg font-medium">Loading...</h1>
    </div>
  )
}
