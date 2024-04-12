import { useState } from "react"
import { createWhiteboarding } from "../../_data/create-whiteboarding"
import CreateBoardDialog from "./CreateBoardDialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Whiteboarding = () => {

  const [bgGradient, setBgGradient] = useState("linear-gradient(180deg, #FFFFFF -72.08%, #FFFFFF -72.04%, #DDD5FF 224.77%)")

  const bgStyle = {
    background: bgGradient,
    transition: "background 150ms"
  }

  return (
    <header className="px-6 py-8 rounded-3xl" style={bgStyle}>
      <Tabs defaultValue="all">
        <TabsList className="bg-transparent flex gap-x-3 text-black">
          <TabsTrigger value="all" className="data-[state=active]:bg-[#AA67FF] data-[state=active]:text-white bg-lightergray rounded-full px-4 py-[10px]">All</TabsTrigger>
          <TabsTrigger value="whiteboard" className="data-[state=active]:bg-[#AA67FF] data-[state=active]:text-white bg-lightergray rounded-full px-4 py-[10px]">Whiteboard</TabsTrigger>
          <TabsTrigger value="presentation" className="data-[state=active]:bg-[#AA67FF] data-[state=active]:text-white bg-lightergray rounded-full px-4 py-[10px]">Presentation</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
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