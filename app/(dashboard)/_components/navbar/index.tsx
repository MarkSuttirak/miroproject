import { UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <div className="navbar">
        <h1>Navbar</h1>
        <UserButton />
    </div>
  )
}

export default Navbar