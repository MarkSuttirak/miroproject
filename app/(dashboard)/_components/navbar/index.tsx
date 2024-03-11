import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <div className="navbar">
        <OrganizationSwitcher 
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display:"flex",
                backgroundColor:"white",
                borderRadius:"8px",
                padding:"8px 12px",
                outline:"none"
              },
              organizationSwitcherTrigger: {
                outline:"none",
                backgroundColor:"white"
              }
            }
          }}
        />
        <UserButton />
    </div>
  )
}

export default Navbar