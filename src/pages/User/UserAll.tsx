import {SidebarHeader} from "../../components";

const breadcrumbItems = [
    {label: 'User', link: '', showOnMobile: true},
    {label: 'All'},
];

function UserAll() {
    return (
        <section className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <SidebarHeader breadcrumbItems={breadcrumbItems}/>
            <p>Hello user all pages</p>
        </section>
    );
}

export default UserAll;
