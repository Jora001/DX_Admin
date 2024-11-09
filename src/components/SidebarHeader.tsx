import { SidebarTrigger } from "../components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { Separator } from "../components/ui/separator";

interface BreadcrumbItem {
    label: string;
    link?: string;
    showOnMobile?: boolean;
}

interface SidebarHeaderProps {
    breadcrumbItems: BreadcrumbItem[];
}

function SidebarHeader({ breadcrumbItems }: SidebarHeaderProps) {
    return (
        <header className="flex h-16 items-center gap-2 transition-all ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" aria-label="Open sidebar" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                    <BreadcrumbList>
                        {breadcrumbItems.map((item, index) => (
                            <BreadcrumbItem key={index} className={item.showOnMobile ? '' : 'hidden md:block'}>
                                {item.link ? (
                                    <BreadcrumbLink href={item.link} aria-label={item.label}>
                                        {item.label}
                                    </BreadcrumbLink>
                                ) : (
                                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                )}
                                {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator className={item.showOnMobile ? '' : 'hidden md:block'} />}
                            </BreadcrumbItem>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </header>
    );
}

export default SidebarHeader;
