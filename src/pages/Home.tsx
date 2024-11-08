import { Sidebar } from '../components/ui/sidebar.tsx'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,} from "../components/ui/breadcrumb"
import { Separator } from "../components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../components/ui/sidebar"
import { NavBar } from "../components/index.ts"

function Home() {
    return (
        <div className="flex w-full">
            <SidebarProvider>
                <Sidebar />
                <SidebarInset>
                    <header className="flex h-16 items-center gap-2 transition-all ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" aria-label="Open sidebar" />
                            <Separator orientation="vertical" className="mr-2 h-4" />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="#" aria-label="Building Your Application">
                                            Building Your Application
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </header>
                    <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        <section className="grid auto-rows-min gap-4 md:grid-cols-3">
                            <div className="aspect-video rounded-xl bg-muted/50" />
                            <div className="aspect-video rounded-xl bg-muted/50" />
                            <div className="aspect-video rounded-xl bg-muted/50" />
                        </section>
                        <section className="min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min" />
                    </main>
                </SidebarInset>
                <NavBar/>
            </SidebarProvider>
        </div>
    )
}

export default Home;
