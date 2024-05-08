import { useState } from "react"
import { createWhiteboarding, whiteboardingTriggers } from "../../../_data/create-whiteboarding"
import CreateBoardDialog from "../CreateBoardDialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { ChevronRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

const Whiteboarding = () => {

  const [bgGradient, setBgGradient] = useState("linear-gradient(180deg, #FFFFFF -72.08%, #FFFFFF -72.04%, #FFD5FD 224.77%)")
  const tabBtnClassName = "data-[state=active]:text-white bg-white rounded-full px-4 py-[10px]"

  const WhiteboardingTrigger = () => {
    return (
      <>
        {whiteboardingTriggers.map(trigger => (
          <TabsTrigger key={trigger.title} value={trigger.type} className={`${trigger.className} ${tabBtnClassName}`}>{trigger.title}</TabsTrigger>
        ))}
      </>
    )
  }

  const WhiteboardingTab = () => {
    return (
      <>
        {whiteboardingTriggers.map(trigger => (
          <TabsContent value={trigger.type} key={trigger.type} className="fade-in">
            <div className="flex items-center gap-x-6">
              <div className="grid grid-cols-3 gap-x-6 w-full">
                {createWhiteboarding.filter(data => data.type === trigger.type).map((whiteboard, index) => (
                  <CreateBoardDialog trigger={whiteboard.trigger} key={index} triggerClassName="w-full"/>
                ))}
              </div>

              <button className="min-w-[188px] overflow-hidden relative rounded-lg">
                <Image src={trigger.allTempImg} width={188} height={188} alt="All templates"/>

                <p className="absolute bottom-0 bg-[#6E3EFF] w-full text-sm py-3 text-white font-bold flex items-center gap-x-2 justify-center">
                  All templates

                  <ChevronRight className="h-4 w-4"/>
                </p>
              </button>
            </div>
          </TabsContent>
        ))}
      </>
    )
  }

  const switchTab = (tab: string) => {
    switch (tab) {
      case "whiteboard": setBgGradient("linear-gradient(180deg, #FFFFFF -72.08%, #FFFFFF -72.04%, #DDD5FF 224.77%)"); break
      case "design-item": setBgGradient("linear-gradient(180deg, #FFFFFF -72.08%, #FFFFFF -72.04%, #D5F2FF 224.77%)"); break
      case "social-media": setBgGradient("linear-gradient(180deg, #FFFFFF -72.08%, #FFFFFF -72.04%, #DDFFD5 224.77%)"); break
      default: setBgGradient("linear-gradient(180deg, #FFFFFF -72.08%, #FFFFFF -72.04%, #FFD5FD 224.77%)"); break
    }
  }

  return (
    <header className="px-6 py-8 rounded-3xl" style={{background: bgGradient}}>
      <Tabs defaultValue="whiteboard" onValueChange={switchTab}>
        <div className="flex items-center mb-8 justify-between">
          <TabsList className="bg-transparent flex gap-x-3 text-black">
            <WhiteboardingTrigger />
          </TabsList>

          <Input type="search" placeholder="Facebook post" className="max-w-[329px] rounded-full" />
        </div>
        <WhiteboardingTab />
      </Tabs>
    </header>
  )
}

export default Whiteboarding