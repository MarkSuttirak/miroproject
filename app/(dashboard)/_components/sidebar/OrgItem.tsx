"use client"

import Image from "next/image"
import { useOrganizationList, useOrganization } from "@clerk/nextjs"
import { Check } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

interface OrgItemProps {
  id: string
  name: string
  imageUrl: string
}

const OrgItem = ({id, name, imageUrl} : OrgItemProps) => {
  const { organization } = useOrganization()
  const { setActive } = useOrganizationList()
  const isActive = organization?.id === id

  const onClick = () => {
    if (!setActive) return;

    setActive({ organization: id })
      .then(() => {
        toast({ title: `Switched the team to ${name}` })
      })
      .catch(() => {
        toast({ title: 'Failed to switch the team, please try again.' })
      })
  }

  return (
    <div className="sidebar-btn justify-between" onClick={onClick}>
      <div className="flex items-center gap-x-2">
        <Image 
          alt={name} 
          src={imageUrl} 
          className='rounded-sm w-4 h-4 object-cover'
          width={16}
          height={16}
        />

        <p className="text-[13px] font-medium">{name}</p>
      </div>

      {isActive && <Check className="w-4 h-4"/>}
    </div>
  )
}

export default OrgItem