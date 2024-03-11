"use client"

import { useOrganizationList } from "@clerk/nextjs"

type OrgTitle = {
    title?: string
}

const OrgList = ({title}: OrgTitle) => {
    const { userMemberships } = useOrganizationList({
        userMemberships: {
            infinite: true
        }
    })

    if (!userMemberships.data?.length) return null

    return (
      <div>
        <h2 className="px-2">Your organizations</h2>
        <ul>
            {userMemberships.data?.map(mem => (
                <li key={mem.organization.id} className="sidebar-btn">
                    {mem.organization.name}
                </li>
            ))}
        </ul>
      </div>
    )
}

export default OrgList