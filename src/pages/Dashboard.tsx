import {SidebarHeader} from "../components/index";

const breadcrumbItems = [
    {label: 'Dashboard', link: '/dashboard', showOnMobile: true}
];

function Dashboard() {
    return (
        <section className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <SidebarHeader breadcrumbItems={breadcrumbItems}/>
            <p>Hello dashboard pages</p>
        </section>
    );
}

export default Dashboard;
