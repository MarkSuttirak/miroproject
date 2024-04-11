import { CreateOrganization } from "@clerk/nextjs"

const AddOrg = () => {
  return (
    <CreateOrganization 
      appearance={{
        elements: {
          formButtonPrimary: {
            backgroundColor: "#801CFF !important",
            width:"100%"
          }
        }
      }}
    />
  )
}

export default AddOrg