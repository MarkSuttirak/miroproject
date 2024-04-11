import Image from "next/image";
import whiteboarding from "@/public/images/whiteboarding.png"
import powerfulDesign from "@/public/images/powerful-design.png"
import powerfulPresentation from "@/public/images/powerful-presentation.png"
import { ReactNode } from "react";

interface CreateWhiteboarding {
  trigger: ReactNode
}

export const createWhiteboarding: CreateWhiteboarding[] = [
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
          <Image width={188} height={188} src={powerfulDesign} alt="powerful-design" />
        </div>
    )
  },
  {
    trigger: (
        <div className="rounded-xl flex bg-white overflow-hidden items-center">
          <h2 className="px-8 font-semibold text-[19px] text-left">Create powerful <br/>presentation</h2>
          <Image width={188} height={188} src={powerfulPresentation} alt="powerful-presentation" />
        </div>
    )
  }
]