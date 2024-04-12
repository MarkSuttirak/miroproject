"use client"

import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { Loading } from "@/components/Loading"
import { OrganizationProfile, useOrganization } from "@clerk/nextjs"
import EmptyOrg from "./_components/dashboard/EmptyOrg"
import BoardCardList from "./_components/dashboard/BoardCardList"
import useDisplayBoards from "@/hooks/use-display-boards"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus, Settings2 } from "lucide-react"
import CreateBoardDialog from "./_components/dashboard/CreateBoardDialog"
import { createWhiteboarding } from "./_data/create-whiteboarding"
import { MenuModal } from "@/components/MenuLink"
import ManageOrganization from "./organization/manage/page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import useSortData from "@/hooks/use-sort-data"
import { cn } from "@/lib/utils"
import CenterButton from "@/components/CenterButton"
import Whiteboarding from "./_components/dashboard/whiteboarding/Whiteboarding"

const Board = () => {
  const data = useQuery(api.board.get)
  const { organization } = useOrganization()

  const [filterType, setFilterType] = useState("default")
  const tabBtnClassName = "data-[state=active]:text-white bg-lightergray rounded-full px-4 py-[10px]"

  const filterData = data?.filter(org => 
    org.orgName === organization?.name
  )

  // const { alphabeticalData } = useSortData(filterData)
  // const showData = filterType === "alphabetical" ? alphabeticalData : filterData

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

              <MenuModal trigger={
                <Button variant="secondary" className="flex items-center gap-x-2 rounded-lg px-[10px] py-[6px] h-fit">
                  <Settings2 className="h-4 w-4"/>
                  Manage Organization
                </Button>
              } contentClassName="min-w-0 max-w-none w-fit p-0">
                <OrganizationProfile
                  appearance={{
                    elements: {
                      navbar: {
                        display: "none"
                      }
                    }
                  }}
                />
              </MenuModal>
            </div>
          </div>

          <Whiteboarding />

          <main className="relative">
            <div className={cn("flex flex-col gap-y-6", {"blur" : filterData?.length === 0})}>
              {data === undefined ? (
                <Loading />
              ) : (
                <Tabs defaultValue="all">
                  <div className="flex items-center justify-between mb-8">
                    <TabsList className="bg-transparent flex gap-x-3 text-black">
                      <TabsTrigger value="all" className={`data-[state=active]:bg-[#AA67FF] ${tabBtnClassName}`}>All</TabsTrigger>
                      <TabsTrigger value="whiteboard" className={`data-[state=active]:bg-[#AA67FF] ${tabBtnClassName}`}>Whiteboard</TabsTrigger>
                      <TabsTrigger value="presentation" className={`data-[state=active]:bg-[#AA67FF] ${tabBtnClassName}`}>Presentation</TabsTrigger>
                    </TabsList>

                    <div className="flex items-center gap-x-3">
                      <Select value={filterType} onValueChange={setFilterType}>
                        <SelectTrigger className="w-[180px] border-none outline-none">
                          <SelectValue defaultValue={filterType} placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Sort by</SelectLabel>
                            <SelectItem value="default">Default</SelectItem>
                            <SelectItem value="alphabetical">Alphabetical</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>

                      <BoardBtns />
                    </div>
                  </div>
                  {filterData?.length !== 0 ? (
                    <>
                      <TabsContent value="all" className="fade-in">
                        <BoardCardList data={filterData!} type={dataDisplay}/>
                      </TabsContent>
                      <TabsContent value="whiteboard" className="fade-in">
                        <BoardCardList data={filterData!} type={dataDisplay}/>
                      </TabsContent>
                    </>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      <div className="bg-lightergray w-full h-[300px] rounded-md"/>
                      <div className="bg-lightergray w-full h-[300px] rounded-md"/>
                      <div className="bg-lightergray w-full h-[300px] rounded-md"/>
                    </div>
                  )}
                </Tabs>
              )}
            </div>

            {filterData?.length === 0 ? (
              <div className="absolute w-full h-full flex items-center justify-center top-0">
                <CreateBoardDialog trigger={
                  <CenterButton icon={<Plus className="text-darkpurple h-5 w-5"/>} title="Start New design" desc="Create a template here"/>
                } />
              </div>
            ) : null}
          </main>
        </section>
      )}
    </>
  ) 
}

export default Board