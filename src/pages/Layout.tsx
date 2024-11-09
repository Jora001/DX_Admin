import { Sidebar, SidebarInset, SidebarProvider } from "../components/ui/sidebar.tsx";
import { NavBar } from "../components/index";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <SidebarProvider>
            <Sidebar />
            <SidebarInset>
                <main className="flex flex-col gap-4 p-8 pt-0 flex-grow h-full">
                    <Outlet />
                </main>
                <NavBar />
            </SidebarInset>
        </SidebarProvider>
    );
}

export default Layout;
