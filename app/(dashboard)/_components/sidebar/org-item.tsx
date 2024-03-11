"use client"

import Image from "next/image"
import { useOrganizationList, useOrganization } from "@clerk/nextjs"
import { cn } from "@/lib/utils"

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
        <div className={cn("sidebar-btn", {'bg-white/25': isActive})} onClick={onClick}>
          <Image 
            alt={name} 
            src={imageUrl} 
            className='rounded-md'
            width={24}
            height={24}
          />

          <p className="text-base">{name}</p>
        </div>
    )
}

export default OrgItem