"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { Loading } from "@/components/Loading"
import { useOrganization } from "@clerk/nextjs"
import BoardCard from "../_components/dashboard/BoardCard"
import { useCreateBoard } from "@/hooks/use-create-board"
import { cn, formatDate } from "@/lib/utils"
import BoardCardList from "../_components/dashboard/BoardCardList"
import useDisplayBoards from "@/hooks/use-display-boards"

const Favourites = () => {
  const data = useQuery(api.board.get)
  const { organization } = useOrganization()

  const orgName = organization?.name

  const filterData = data?.filter(org => 
    org.orgName === orgName && 
    org.favourite === true
  )

  const { dataDisplay, BoardBtns } = useDisplayBoards()

  return (
    <section className="flex flex-col gap-y-8">
      <div className="flex items-center justify-between">
        <h1 className="dashboard-title">Favorite boards</h1>

        <BoardBtns />
      </div>

      {filterData?.length === 0 ? (
        <div className="flex flex-col items-center h-[60vh] w-full justify-center gap-y-4">
          <h1 className="dashboard-title">No favorite boards</h1>
          <p>Your favorite boards will appear here. Try favoriting your boards.</p>
        </div>
      ) : (
        <BoardCardList data={filterData!} type={dataDisplay}/>
      )}
    </section>
  )
}

export default Favourites