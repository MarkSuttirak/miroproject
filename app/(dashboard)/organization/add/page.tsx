import { CreateOrganization } from "@clerk/nextjs"

const AddOrganization = () => {
    return (
        <CreateOrganization 
          appearance={{
            elements: {
              rootBox: {
                boxShadow:"none"
              }
            }
          }}
        />
    )
}

export default AddOrganization