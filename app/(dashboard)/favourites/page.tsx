"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { Loading } from "@/components/Loading"
import { useOrganization } from "@clerk/nextjs"
import BoardCard from "../_components/dashboard/BoardCard"
import { useCreateBoard } from "@/hooks/use-create-board"
import { formatDate } from "@/lib/utils"

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
      <h1 className="dashboard-title">Favorite boards</h1>

      {filterData?.length === 0 ? (
        <div className="flex flex-col items-center h-[60vh] w-full justify-center gap-y-4">
          <h1 className="dashboard-title">No favorite boards</h1>
          <p>Your favorite boards will appear here. Try favoriting your boards.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filterData?.map(d => (
            <BoardCard 
              imageUrl={d.imageUrl} 
              title={d.title} 
              key={d._id} 
              id={d._id} 
              authorName={d.authorName} 
              authorId={d.authorId}
              isFavourite={d.favourite}
              creationTime={formatDate(d._creationTime)}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Favourites