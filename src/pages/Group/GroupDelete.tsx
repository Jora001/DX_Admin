import {SidebarHeader} from "../../components/index";

const breadcrumbItems = [
    {label: 'Group', link: '', showOnMobile: true},
    {label: 'Delete'},
];

function GroupDelete() {
    return (
        <section className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <SidebarHeader breadcrumbItems={breadcrumbItems}/>
            <p>Hello user all pages</p>
        </section>
    );
}

export default GroupDelete;
