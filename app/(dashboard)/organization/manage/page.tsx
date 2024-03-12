import { OrganizationProfile } from "@clerk/nextjs"

const ManageOrganization = () => {
    return (
        <OrganizationProfile 
          appearance={{
            elements: {
              rootBox:{
                width:"100%"
              },
              card: {
                boxShadow:"none",
                width:"100%",
                maxWidth:"none",
              },
              scrollBox:{
                overflow:"visible"
              },
              pageScrollBox:{
                padding:0,
              },
              navbar: {
                border:"none",
                padding:0,
                paddingRight:"2.5rem"
              }
            }
          }}
        />
    )
}

export default ManageOrganization