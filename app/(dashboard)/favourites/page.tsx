"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { Loading } from "@/components/loading"
import { useOrganization } from "@clerk/nextjs"
import BoardCard from "../_components/dashboard/board-card"
import { useCreateBoard } from "@/hooks/use-create-board"

const Favourites = () => {
  const data = useQuery(api.board.get)
  const { organization } = useOrganization()

  const orgName = organization?.name

  const filterData = data?.filter(org => 
    org.orgName === orgName && 
    org.favourite === true
  )

  return (
    <section className="flex flex-col gap-y-8">
      <h1 className="dashboard-title">Favourite boards</h1>

      {filterData?.length === 0 ? (
        <div className="flex flex-col items-center h-[60vh] w-full justify-center gap-y-4">
          <h1 className="dashboard-title">No favourite boards</h1>
          <p>Try favouriting your boards</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filterData?.map(d => (
            <BoardCard 
              imageUrl={d.imageUrl} 
              title={d.title} 
              key={d._id} 
              id={d._id} 
              authorName={d.authorName} 
              authorId={d.authorId}
              isFavourite={d.favourite}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Favourites