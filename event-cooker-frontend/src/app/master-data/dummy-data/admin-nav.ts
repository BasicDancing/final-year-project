export class DropOptions{
    title: string;
    link: string;
}

export const dropOptions = [
    {
        title: "Profile",
        link: "/admin/profile"
    },
    {
        title: "Massages",
        link: "/admin/massages"
    },
    {
        title: "Settings",
        link: "/admin/settings"
    },
    {
        title: "Log Out",
        link: "/login"
    },
]

export class NavOptions{
    title: string;
    link: string;
}

export const navOptions = [
    {
        title: "Home",
        link: "/admin"
    },
    {
        title: "Jobs",
        link: "/user/jobs"
    },
    {
        title: "User",
        link: "/user"
    },
    {
        title: "History",
        link: "/admin/history"
    },
]

export class NavLinks{
    dropOptions: DropOptions[];
    navOptions: NavOptions[];
}