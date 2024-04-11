import Navbar from "../(dashboard)/_components/navbar"
import TemplateSidebar from "./_components/sidebar"

interface TemplateLayoutProps {
    children: React.ReactNode
}

const TemplateLayout = ({children} : TemplateLayoutProps) => {
    return (
        <main className="fade-in">
            <TemplateSidebar />
            <Navbar />
            
            <div className="main-dashboard">
                {children}
            </div>
        </main>
    )
}

export default TemplateLayout