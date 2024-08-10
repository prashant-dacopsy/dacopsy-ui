import { Outlet } from "react-router-dom"
import Header from "./Header"
import { Sidebar } from "./Sidebar"



const Structure = () => {
    return (
        <>
            <Header />
            <main className="flex gap-5">
                <Sidebar />
                <div className="mt-5 container">
                    <Outlet /> {/* This will render the nested routes */}
                </div>
            </main>
        </>
    )
}

export default Structure