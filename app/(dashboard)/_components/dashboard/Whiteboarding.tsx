import { useState } from "react"
import { createWhiteboarding } from "../../_data/create-whiteboarding"
import CreateBoardDialog from "./CreateBoardDialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Whiteboarding = () => {

  const [bgGradient, setBgGradient] = useState("linear-gradient(180deg, #FFFFFF -72.08%, #FFFFFF -72.04%, #FFD5FD 224.77%)")
  const tabBtnClassName = "data-[state=active]:text-white bg-white rounded-full px-4 py-[10px]"

  const switchTab = (tab: string) => {
    switch (tab) {
      case "whiteboard": setBgGradient("linear-gradient(180deg, #FFFFFF -72.08%, #FFFFFF -72.04%, #DDD5FF 224.77%)"); break
      case "presentation": setBgGradient("linear-gradient(180deg, #FFFFFF -72.08%, #FFFFFF -72.04%, #D5F2FF 224.77%)"); break
      default: setBgGradient("linear-gradient(180deg, #FFFFFF -72.08%, #FFFFFF -72.04%, #FFD5FD 224.77%)"); break
    }
  }

  return (
    <header className="px-6 py-8 rounded-3xl" style={{background: bgGradient}}>
      <Tabs defaultValue="all" onValueChange={switchTab}>
        <div className="flex items-center mb-8">
          <TabsList className="bg-transparent flex gap-x-3 text-black">
            <TabsTrigger value="all" className={`data-[state=active]:bg-[#FF5B90] ${tabBtnClassName}`}>All</TabsTrigger>
            <TabsTrigger value="whiteboard" className={`data-[state=active]:bg-[#AA67FF] ${tabBtnClassName}`}>Whiteboard</TabsTrigger>
            <TabsTrigger value="presentation" className={`data-[state=active]:bg-[#6792FF] ${tabBtnClassName}`}>Presentation</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all" className="fade-in">
          <div className="flex items-center gap-x-6">
            {createWhiteboarding.map((whiteboard, index) => (
              <CreateBoardDialog trigger={whiteboard.trigger} key={index}/>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="whiteboard" className="fade-in">
          <div className="flex items-center gap-x-6">
            {createWhiteboarding.map((whiteboard, index) => (
              <CreateBoardDialog trigger={whiteboard.trigger} key={index}/>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </header>
  )
}

export default Whiteboarding