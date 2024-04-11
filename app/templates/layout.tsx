import Navbar from "../(dashboard)/_components/navbar"

interface TemplateLayoutProps {
    children: React.ReactNode
}

const TemplateLayout = ({children} : TemplateLayoutProps) => {
    return (
        <main className="fade-in">
            {/* <Sidebar /> */}
            <Navbar />
            
            <div className="main-dashboard">
                {children}
            </div>
        </main>
    )
}

export default TemplateLayout