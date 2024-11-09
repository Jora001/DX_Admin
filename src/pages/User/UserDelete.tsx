import {SidebarHeader} from "../../components";

const breadcrumbItems = [
    {label: 'User', link: '', showOnMobile: true},
    {label: 'Delete'},
];

function UserDelete() {
    return (
        <section className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <SidebarHeader breadcrumbItems={breadcrumbItems}/>
            <h1>User Delete</h1>
        </section>
    );
}

export default UserDelete;
