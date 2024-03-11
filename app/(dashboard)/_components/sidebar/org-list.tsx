"use client"

import { useOrganizationList } from "@clerk/nextjs"
import OrgItem from "./org-item"

const OrgList = () => {
    const { userMemberships } = useOrganizationList({
        userMemberships: {
            infinite: true
        }
    })

    if (!userMemberships.data?.length) return null

    return (
      <div className="flex flex-col gap-y-4">
        <h2 className="px-2 text-lg font-semibold">Your organizations</h2>

        <ul className="flex flex-col gap-y-2">
            {userMemberships.data?.map(mem => (
                <OrgItem
                  key={mem.organization.id}
                  id={mem.organization.id}
                  name={mem.organization.name}
                  imageUrl={mem.organization.imageUrl}
                />
            ))}
        </ul>
      </div>
    )
}

export default OrgList