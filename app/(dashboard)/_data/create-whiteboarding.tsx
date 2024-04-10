import Image from "next/image";
import whiteboarding from "@/public/images/whiteboarding.png"
import powerfulDesign from "@/public/images/powerful-design.png"

export const createWhiteboarding = [
  {
    trigger: (
      <div className="rounded-xl flex bg-white overflow-hidden items-center">
        <h2 className="px-8 font-semibold text-[19px] text-left">Create powerful <br/>whiteboarding</h2>
        <Image width={188} height={188} src={whiteboarding} alt="whiteboarding" />
      </div>
    )
  },
  {
    trigger: (
        <div className="rounded-xl flex bg-white overflow-hidden items-center">
          <h2 className="px-8 font-semibold text-[19px] text-left">Create powerful <br/>design</h2>
          <Image width={188} height={188} src={powerfulDesign} alt="whiteboarding" />
        </div>
    )
  }
]