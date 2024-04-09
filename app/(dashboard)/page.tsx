"use client"

import { api } from "@/convex/_generated/api"
import { useMutation, useQuery } from "convex/react"
import { Loading } from "@/components/Loading"
import { useOrganization } from "@clerk/nextjs"
import BoardCard from "./_components/dashboard/BoardCard"
import EmptyOrg from "./_components/dashboard/EmptyOrg"
import CreateBoardDialog from "./_components/dashboard/CreateBoardDialog"
import { formatDate } from "@/lib/utils"
import BoardCardList from "./_components/dashboard/BoardCardList"

const Board = () => {
  const data = useQuery(api.board.get)
  const { organization } = useOrganization()

  const orgName = organization?.name

  const filterData = data?.filter(org => 
    org.orgName === orgName
  )

  return (
    <>
      {!organization ? (

        <EmptyOrg />

      ) : (
        <section className="flex flex-col gap-y-8">
          <div className="flex items-center justify-between">
            <h1 className="dashboard-title">{orgName}&#39;s boards</h1>

            <CreateBoardDialog />
          </div>

          {data === undefined ? (
            <Loading />
          ) : (
            <>
              {filterData?.length === 0 ? (
                <div className="flex flex-col items-center h-[60vh] w-full justify-center gap-y-4">
                  <h1 className="dashboard-title">No boards</h1>
                  <p>Create your first board to get started.</p>
                </div>
              ) : (
                <BoardCardList data={filterData} type="list"/>
              )}
            </>
          )}
        </section>
      )}
    </>
  ) 
}

export default Board