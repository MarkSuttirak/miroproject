import { Button } from "@/components/ui/button"
import { Frown } from "lucide-react"
import Link from "next/link"

const NotFound = () => {
    return (
        <div className="h-screen w-full flex flex-col gap-y-6 items-center justify-center px-6 text-center fade-in text-red-500">
            <Frown className="w-20 h-20"/>
            
            <div className="flex flex-col gap-y-3">
                <h1 className="text-4xl font-bold">404 NOT FOUND</h1>
                <p className="text-lg">Sorry, the page you are looking for is not found.</p>
            </div>

            <Link href="/" className="mt-4">
                <Button className="bg-red-500 hover:bg-red-600">Back to Homepage</Button>
            </Link>
        </div>
    )
}

export default NotFound