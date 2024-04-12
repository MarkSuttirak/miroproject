import WhiteboardCard from "../_components/dashboard/whiteboarding/WhiteboardCard";
import { allTemps, whiteboardImages } from "./whiteboarding-images";
import { CreateWhiteboarding, WhiteboardTriggers } from "@/types";

export const createWhiteboarding: CreateWhiteboarding[] = [
  {
    trigger: (<WhiteboardCard imageUrl={whiteboardImages.meetingAgenda} title={<>Team meeting <br/>agenda</>} desc="Create a meeting agenda"/>),
    type:"whiteboard"
  },
  {
    trigger: (<WhiteboardCard imageUrl={whiteboardImages.mindmap} title="Mindmap" desc="Create a mindmap"/>),
    type:"whiteboard"
  },
  {
    trigger: (<WhiteboardCard imageUrl={whiteboardImages.flowchart} title="Flow chart" />),
    type:"whiteboard"
  },
  {
    trigger: (<WhiteboardCard imageUrl={whiteboardImages.businessCards} title="Business Cards" />),
    type:"design-item"
  }
]

export const whiteboardingTriggers: WhiteboardTriggers[] = [
  {
    className: "data-[state=active]:bg-[#AA67FF]",
    title: "Whiteboard",
    type: "whiteboard",
    allTempImg: allTemps.allTempTwo
  },
  {
    className: "data-[state=active]:bg-[#6792FF]",
    title: "Design item",
    type: "design-item",
    allTempImg: allTemps.allTempThree
  }
]