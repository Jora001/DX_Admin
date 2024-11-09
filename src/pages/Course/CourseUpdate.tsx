import {SidebarHeader} from "../../components/index";

const breadcrumbItems = [
    {label: 'Course', link: '', showOnMobile: true},
    {label: 'Create'},
];

function CourseUpdate() {
    return (
        <section className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <SidebarHeader breadcrumbItems={breadcrumbItems}/>
            <p>Hello user all pages</p>
        </section>
    );
}

export default CourseUpdate;
