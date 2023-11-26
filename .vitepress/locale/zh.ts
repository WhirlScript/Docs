import { DefaultTheme } from "vitepress";

export function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "入门指南",
            link: "/zh/guide/introduction/what-is-whirlscript",
            activeMatch: "/zh/guide/"
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
                    { text: "什么是 Whirlscript？", link: "/introduction/what-is-whirlscript" }
                ]
            },
            {
                text: "立即开始",
                collapsed: false,
                items: [
                    { text: "立即开始", link: "/getting-started/getting-started" },
                    { text: "Hello World!", link: "/getting-started/hello-world" },
                    { text: "Hello Whirlpool!", link: "/getting-started/hello-whirlpool" }
                ]
            }
        ];
    }
};

