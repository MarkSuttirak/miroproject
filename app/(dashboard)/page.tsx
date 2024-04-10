"use client"

import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { Loading } from "@/components/Loading"
import { useOrganization } from "@clerk/nextjs"
import EmptyOrg from "./_components/dashboard/EmptyOrg"
import BoardCardList from "./_components/dashboard/BoardCardList"
import useDisplayBoards from "@/hooks/use-display-boards"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Settings2 } from "lucide-react"
import CreateBoardDialog from "./_components/dashboard/CreateBoardDialog"
import { createWhiteboarding } from "./_data/create-whiteboarding"

const Board = () => {
  const data = useQuery(api.board.get)
  const { organization } = useOrganization()

  const filterData = data?.filter(org => 
    org.orgName === organization?.name
  )

  const { dataDisplay, BoardBtns } = useDisplayBoards()

  return (
    <>
      {!organization ? (

        <EmptyOrg />

      ) : (
        <section className="flex flex-col gap-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <Image width={32} height={32} className="h-8 w-8 object-cover rounded-md" src={organization?.imageUrl || ""} alt={organization?.name || "Anonymous"}  />
              <h1 className="dashboard-title">{organization?.name}</h1>
            </div>

            <div className="flex gap-x-6 items-center">
              {/* <CreateBoardDialog /> */}

              <Link href="/organization/manage">
                <Button variant="secondary" className="flex items-center gap-x-2 rounded-lg px-[10px] py-[6px] h-fit">
                  <Settings2 className="h-4 w-4"/>
                  Manage Organization
                </Button>
              </Link>
            </div>
          </div>

          <header className="px-6 py-8 rounded-3xl" style={{background:"linear-gradient(180deg, #FFFFFF -72.08%, #FFFFFF -72.04%, #DDD5FF 224.77%)"}}>
            <h1 className="text-[#3D3D3D] text-[19px] font-bold mb-6">วันนี้คุณต้องการทำอะไร</h1>

            <div className="flex items-center gap-x-6">
              {createWhiteboarding.map((whiteboard) => (
                <CreateBoardDialog trigger={whiteboard.trigger}/>
              ))}
            </div>
          </header>

          <main className="flex flex-col gap-y-6">
            <BoardBtns />

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
          </main>
        </section>
      )}
    </>
  ) 
}

export default Board