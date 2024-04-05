"use client"

import { api } from "@/convex/_generated/api"
import { useMutation, useQuery } from "convex/react"
import { useOrganization } from "@clerk/nextjs"
import BoardCard from "../../_components/dashboard/BoardCard"
import { Loading } from "@/components/Loading"

interface SearchResultProps {
  params: {
    result: string
  }
}

const SearchPage = ({ params } : SearchResultProps) => {
  const data = useQuery(api.board.get)
  const { organization } = useOrganization()

  const orgName = organization?.name

  const filterData = data?.filter(org => 
    org.orgName === orgName &&
    org.title.toLowerCase().includes(params.result.toLowerCase())
  )

  return (
    <section className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-2">
        <h1 className="dashboard-title">Search results of {params.result}</h1>

        {filterData?.length !== 0 && 
          <h3 className="text-lg">Found {filterData?.length} {filterData?.length === 1 ? "result" : "results"}</h3>
        }
      </div>

      {data === undefined ? (
        <Loading />
      ) : (
        <>
          {filterData?.length === 0 ? (
            <div className="flex flex-col items-center h-[60vh] w-full justify-center gap-y-4">
              <h1 className="dashboard-title">No results found</h1>
              <p>Please try another search</p>
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
        </>
      )}
    </section>
  )
}

export default SearchPage