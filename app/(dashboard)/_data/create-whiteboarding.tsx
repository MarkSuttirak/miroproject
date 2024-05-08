import WhiteboardCard from "../_components/dashboard/whiteboarding/WhiteboardCard";
import { allTemps, whiteboardImages } from "./whiteboarding-images";
import { CreateWhiteboarding, WhiteboardTriggers } from "@/types";

export const createWhiteboarding: CreateWhiteboarding[] = [
  {
    trigger: (<WhiteboardCard imageUrl={whiteboardImages.meetingWhiteboarding} title={<>Create meeting <br/>Whiteboarding</>} desc="Create a whiteboard"/>),
    type:"recommended"
  },
  {
    trigger: (<WhiteboardCard imageUrl={whiteboardImages.instagramPost} title={<>Instagram post <br/>Design</>} desc={<>Create with 1080 x 1080 <br/>px (Square)</>}/>),
    type:"recommended"
  },
  {
    trigger: (<WhiteboardCard imageUrl={whiteboardImages.powerfulPresentation} title={<>Create powerful <br/>presentation</>} desc={<>Create with 940 x 788 px <br/>(Landscape)</>} />),
    type:"recommended"
  },
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
    trigger: (<WhiteboardCard imageUrl={whiteboardImages.businessCards} title="Business Cards" desc={<>Create with 3.5 x 2 inch <br/>(1050 x 600 px)</>} />),
    type:"design-item"
  },
  {
    trigger: (<WhiteboardCard imageUrl={whiteboardImages.flyers} title="Flyers" desc={<>Create with 8.5 x 11 inch <br/>(816 x 1058 px)</>} />),
    type:"design-item"
  },
  {
    trigger: (<WhiteboardCard imageUrl={whiteboardImages.resumes} title="Resumes" desc={<>Create with 8.5 x 11 inch <br/>(816 x 1058 px)</>} />),
    type:"design-item"
  },
  {
    trigger: (<WhiteboardCard imageUrl={whiteboardImages.instagramPost} title="Instagram post" desc={<>Create with 1080 x 1080 <br/>px (Square)</>} />),
    type:"social-media"
  },
  {
    trigger: (<WhiteboardCard imageUrl={whiteboardImages.facebookPost} title="Facebook post" desc={<>Create with 940 x 788 px<br/>(Landscape)</>} />),
    type:"social-media"
  }
]

export const whiteboardingTriggers: WhiteboardTriggers[] = [
  {
    className: "data-[state=active]:bg-[#FF5B90]",
    title: "Recommended",
    type: "recommended",
    allTempImg: allTemps.allTempOne
  },
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
  },
  {
    className: "data-[state=active]:bg-[#67FF7F] data-[state=active]:!text-black",
    title: "Social Media",
    type: "social-media",
    allTempImg: allTemps.allTempThree
  }
]