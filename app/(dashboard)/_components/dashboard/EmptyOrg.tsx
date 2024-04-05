import { Button } from "@/components/ui/button"
import Link from "next/link"

const EmptyOrg = () => {
  return (
    <div className="flex flex-col items-center h-[60vh] w-full justify-center gap-y-4">
      <h1 className="dashboard-title">Welcome to Miroproj</h1>
      <p>Create an organization to get started.</p>

      <Link href="/organization/add">
        <Button>
          Create an organization
        </Button>
      </Link>
    </div>
  )
}

export default EmptyOrg