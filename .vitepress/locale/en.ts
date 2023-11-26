import { DefaultTheme } from "vitepress";

export function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "Guide",
            link: "/guide/what-is-whirlscript",
            activeMatch: "/guide/"
        }
    ];
}

export const sidebar = {
    guide(): DefaultTheme.SidebarItem[] {
        return [
            {
                text: "Introduction",
                collapsed: false,
                items: [
                    { text: "What is Whirlscript?", link: "/what-is-whirlscript" },
                    { text: "Getting Started", link: "/getting-started" }
                ]
            }
        ];
    }
};