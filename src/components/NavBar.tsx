import React from "react";
import { NavMain } from "../components/ui/nav-main"
import { NavProjects } from "../components/ui/nav-projects"
import { NavUser } from "../components/ui/nav-user"
import { TeamSwitcher } from "../components/ui/team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "../components/ui/sidebar"
import {data} from "../assets/data/data.ts";


function NavBar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavProjects projects={data.projects} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
export default NavBar;
