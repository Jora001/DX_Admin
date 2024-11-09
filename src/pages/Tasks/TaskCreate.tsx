import {SidebarHeader} from "../../components/index.ts";

const breadcrumbItems = [
    {label: 'Teacher', link: '', showOnMobile: true},
    {label: 'Create'},
];

function TaskCreate() {
    return (
        <section className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <SidebarHeader breadcrumbItems={breadcrumbItems}/>
            <p>Hello user all pages</p>
        </section>
    );
}

export default TaskCreate;
