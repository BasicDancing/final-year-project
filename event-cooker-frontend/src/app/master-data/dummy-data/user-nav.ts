export class DropOptions{
    title: string;
    link: string;
}

export const dropOptions = [
    {
        title: "Profile",
        link: "/user/profile"
    },
    {
        title: "Massages",
        link: "/user/massages"
    },
    {
        title: "Settings",
        link: "/user/settings"
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
        link: "/user"
    },
    {
        title: "Jobs",
        link: "/user/jobs"
    },
    {
        title: "Payments",
        link: "/user.payments"
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