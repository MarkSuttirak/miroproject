"use client"

import { useOrganization } from "@clerk/nextjs"
import EmptyOrg from "./_components/dashboard/empty-org"

const DashboardPage = () => {

  const { organization } = useOrganization()

  return (
    <div>
      {organization ? (
        <EmptyOrg />
      ) : (
        <h1 className="dashboard-title">My boards</h1>
      )}
    </div>
  )
}

export default DashboardPage