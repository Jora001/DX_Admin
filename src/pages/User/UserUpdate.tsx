import {SidebarHeader} from "../../components";

const breadcrumbItems = [
    {label: 'User', link: '', showOnMobile: true},
    {label: 'Update'},
];

function UserUpdate() {
    return (
        <section className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <SidebarHeader breadcrumbItems={breadcrumbItems} />
            <h1>User Update</h1>
        </section>
    );
}

export default UserUpdate;
