import {
    AudioWaveform,
    Command,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    User,
    SquareUserRound,
    Component,
    School
} from "lucide-react";

export const data = {
    user: {
        name: "shading",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "CONNECT",
            logo: GalleryVerticalEnd,
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    navMain: [
        {
            title: "Users",
            url: "/user",
            icon: User,
            isActive: true,
            items: [
                {
                    title: "All",
                    url: "/user/all",
                },
                {
                    title: "Create",
                    url: "/user/create",
                },
                {
                    title: "Update",
                    url: "/user/update",
                },
                {
                    title: "Delete",
                    url: "/user/delete",
                },
            ],
        },
        {
            title: "Teachers",
            url: "/teachers",
            icon: SquareUserRound,
            items: [
                {
                    title: "All",
                    url: "/teacher/all",
                },
                {
                    title: "Create",
                    url: "/teacher/create",
                },
                {
                    title: "Update",
                    url: "/teacher/update",
                },
                {
                    title: "Delete",
                    url: "/teacher/delete",
                },
            ],
        },
        {
            title: "Groups",
            url: "/group",
            icon: Component,
            items: [
                {
                    title: "All",
                    url: "/group/all",
                },
                {
                    title: "Create",
                    url: "/group/create",
                },
                {
                    title: "Update",
                    url: "/group/update",
                },
                {
                    title: "Delete",
                    url: "/group/delete",
                },
            ],
        },
        {
            title: "Tasks",
            url: "/task",
            icon: Settings2,
            items: [
                {
                    title: "Create",
                    url: "/task/create",
                },
                {
                    title: "Update",
                    url: "/task/update",
                },
                {
                    title: "Delete",
                    url: "/task/delete",
                },
            ],
        },
        {
            title: "Course",
            url: "/course",
            icon: School,
            items: [
                {
                    title: "All",
                    url: "/course/all",
                },
                {
                    title: "Create",
                    url: "/course/create",
                },
                {
                    title: "Update",
                    url: "/course/update",
                },
                {
                    title: "Delete",
                    url: "/course/delete",
                },
            ],
        },
    ],
    projects: [
    ],
}
