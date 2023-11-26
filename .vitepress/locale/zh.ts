import { DefaultTheme } from "vitepress";

export function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "入门指南",
            link: "/zh/guide/what-is-whirlscript",
            activeMatch: "/guide/"
        }
    ];
}

export const sidebar = {
    guide(): DefaultTheme.SidebarItem[] {
        return [
            {
                text: "介绍",
                collapsed: false,
                items: [
                    { text: "什么是 Whirlscript？", link: "/what-is-whirlscript" },
                    { text: "立即开始", link: "/getting-started" }
                ]
            }
        ];
    }
};

