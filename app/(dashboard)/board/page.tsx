"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const Board = () => {
  const data = []

  return (
    <div className="flex flex-col items-center h-[60vh] w-full justify-center gap-y-4">
      <h1 className="dashboard-title">No boards</h1>
      <p>Create a board to get started.</p>
    </div>
  )
}

export default Board