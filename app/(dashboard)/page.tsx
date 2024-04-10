"use client"

import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { Loading } from "@/components/Loading"
import { useOrganization } from "@clerk/nextjs"
import EmptyOrg from "./_components/dashboard/EmptyOrg"
import CreateBoardDialog from "./_components/dashboard/CreateBoardDialog"
import BoardCardList from "./_components/dashboard/BoardCardList"
import { BoardCardType } from "@/types"
import { ReactNode, useState } from "react"
import { LayoutGrid, List } from "lucide-react"
import { cn } from "@/lib/utils"
import useDisplayBoards from "@/hooks/use-display-boards"

const Board = () => {
  const data = useQuery(api.board.get)
  const { organization } = useOrganization()

  const orgName = organization?.name

  const filterData = data?.filter(org => 
    org.orgName === orgName
  )

  const { dataDisplay, BoardBtns } = useDisplayBoards()

  return (
    <>
      {!organization ? (

        <EmptyOrg />

      ) : (
        <section className="flex flex-col gap-y-8">
          <div className="flex items-center justify-between">
            <h1 className="dashboard-title">{orgName}&#39;s boards</h1>

            <div className="flex gap-x-6 items-center">
              <CreateBoardDialog />

              <BoardBtns />
            </div>
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
                <BoardCardList data={filterData!} type={dataDisplay}/>
              )}
            </>
          )}
        </section>
      )}
    </>
  ) 
}

export default Board