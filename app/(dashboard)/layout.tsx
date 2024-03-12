import Navbar from "./_components/navbar"
import Sidebar from "./_components/sidebar"

interface DashboardLayoutProps {
    children: React.ReactNode
}

const DashboardLayout = ({children} : DashboardLayoutProps) => {
    return (
        <main className="fade-in">
            <Sidebar />
            <Navbar />
            
            <div className="main-dashboard">
                {children}
            </div>
        </main>
    )
}

export default DashboardLayout