"use client"

import { api } from "@/convex/_generated/api"
import { useMutation, useQuery } from "convex/react"
import { useOrganization } from "@clerk/nextjs"
import { Loading } from "@/components/Loading"
import useDisplayBoards from "@/hooks/use-display-boards"
import BoardCardList from "../../_components/dashboard/BoardCardList"

interface SearchResultProps {
  params: {
    result: string
  }
}

const SearchPage = ({ params } : SearchResultProps) => {
  const data = useQuery(api.board.get)
  const { organization } = useOrganization()
  const { dataDisplay, BoardBtns } = useDisplayBoards()

  const orgName = organization?.name

  const filterData = data?.filter(org => 
    org.orgName === orgName &&
    org.title.toLowerCase().includes(params.result.toLowerCase())
  )

  return (
    <section className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center justify-between">
          <h1 className="dashboard-title">Search results of {params.result}</h1>

          <BoardBtns />
        </div>

        {filterData?.length !== 0 && 
          <h3 className="text-base">Found {filterData?.length} {filterData?.length === 1 ? "result" : "results"}</h3>
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
            <BoardCardList data={filterData!} type={dataDisplay}/>
          )}
        </>
      )}
    </section>
  )
}

export default SearchPage