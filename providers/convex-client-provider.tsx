"use client"

import { ClerkProvider, useAuth } from "@clerk/nextjs"
import { ConvexProviderWithClerk } from "convex/react-clerk"
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react"
import { Loading } from "@/components/Loading"

interface ConvexProviderProps {
    children: React.ReactNode
}

const convex = new ConvexReactClient("https://aromatic-iguana-546.convex.cloud")

export default function ConvexClientProvider({children} : ConvexProviderProps){
    return (
        <ClerkProvider publishableKey="pk_test_ZmFuY3ktbGlnZXItMzMuY2xlcmsuYWNjb3VudHMuZGV2JA">
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