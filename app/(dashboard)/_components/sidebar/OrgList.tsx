"use client"

import { useOrganizationList } from "@clerk/nextjs"
import OrgItem from "./OrgItem"

const OrgList = () => {
    const { userMemberships } = useOrganizationList({
        userMemberships: {
            infinite: true
        }
    })

    if (!userMemberships.data?.length) return null

    return (
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
    )
}

export default OrgList