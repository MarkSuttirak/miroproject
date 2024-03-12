"use client"

import { CreateOrganization } from "@clerk/nextjs"

const AddOrganization = () => {
  return (
    <CreateOrganization 
      appearance={{
        elements: {
          rootBox:{
            width:"100%"
          },
          card: {
            boxShadow:"none",
            width:"100%",
            maxWidth:"none"
          },
          scrollBox:{
            overflow:"visible",
          },
          pageScrollBox:{
            padding:0,
            overflow:"visible"
          }
        }
      }}
    />
  )
}

export default AddOrganization