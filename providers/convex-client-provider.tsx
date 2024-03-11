"use client"

import { ClerkProvider, useAuth } from "@clerk/nextjs"
import { ConvexProviderWithClerk } from "convex/react-clerk"
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react"
import { Loading } from "@/components/loading"

interface ConvexProviderProps {
    children: React.ReactNode
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export default function ConvexClientProvider({children} : ConvexProviderProps){
    return (
        <ClerkProvider>
          <ConvexProviderWithClerk useAuth={useAuth} client={convex}>

            <Authenticated>
                {children}
            </Authenticated>

            <AuthLoading>
                <Loading />
            </AuthLoading>

          </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}