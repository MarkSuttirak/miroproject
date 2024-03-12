"use client"

import Image from "next/image"
import { useOrganizationList, useOrganization } from "@clerk/nextjs"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface OrgItem {
    id: string,
    name: string,
    imageUrl: string
}

const OrgItem = ({id, name, imageUrl} : OrgItem) => {
    const { organization } = useOrganization()
    const { setActive } = useOrganizationList()
    const isActive = organization?.id === id

    const onClick = () => {
        if (!setActive) return;
        setActive({organization: id})
    }

    return (
        <div className="sidebar-btn justify-between" onClick={onClick}>
          <div className="flex items-center gap-x-2">
            <Image 
              alt={name} 
              src={imageUrl} 
              className='rounded-md'
              width={24}
              height={24}
            />

            <p className="text-base">{name}</p>
          </div>

          {isActive && <Check />}
        </div>
    )
}

export default OrgItem