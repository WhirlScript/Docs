import { DefaultTheme } from "vitepress";

export function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "入门指南",
            link: "/zh/guide/introduction/what-is-whirlscript",
            activeMatch: "/zh/guide/"
        },
        {
            text: "镜像",
            items: [
                {
                    text: "GitHub Pages",
                    link: "https://whirlscript.github.io"
                },
                {
                    text: "Vercel",
                    link: "https://whirlscript.vercel.app"
                },
                {
                    text: "Cloudflare Pages",
                    link: "https://whirlscript.pages.dev"
                },
                {
                    text: "Zeabur (Beta)",
                    link: "https://whirlscript.zeabur.app"
                }
            ]
        }
    ];
}

export function sidebar(): DefaultTheme.SidebarMulti {
    return {
        "/zh/guide/": {
            base: "/zh/",
            items: [
                sidebarItem.introduction(false),
                sidebarItem.gettingStarted(false),
                sidebarItem.reference(true)
            ]
        },
        "/zh/reference/std/": {
            base: "/zh/",
            items: [
                sidebarItem.introduction(true),
                sidebarItem.gettingStarted(true),
                sidebarItem.reference(false, false)
            ]
        }
    };
}

const sidebarItem = {
    introduction(collapsed: boolean): DefaultTheme.SidebarItem {
        return {
            text: "介绍",
            collapsed,
            items: [
                {
                    text: "什么是 Whirlscript？",
                    link: "/guide/introduction/what-is-whirlscript"
                }
            ]
        };
    },

    gettingStarted(collapsed: boolean): DefaultTheme.SidebarItem {
        return {
            text: "立即开始",
            collapsed,
            items: [
                {
                    text: "立即开始",
                    link: "/guide/getting-started/getting-started"
                },
                {
                    text: "Hello World!",
                    link: "/guide/getting-started/hello-world"
                },
                {
                    text: "Hello Whirlpool!",
                    link: "/guide/getting-started/hello-whirlpool"
                },
                {
                    text: "语法和类型",
                    link: "/guide/getting-started/grammar-and-types"
                },
                {
                    text: "流程控制",
                    link: "/guide/getting-started/control-flow"
                },
                {
                    text: "函数",
                    link: "/guide/getting-started/function"
                },
                {
                    text: "表达式与运算符",
                    link: "/guide/getting-started/expressions-and-operators"
                },
                {
                    text: "命名空间",
                    link: "/guide/getting-started/namespace"
                },
                {
                    text: "模块",
                    link: "/guide/getting-started/modules"
                },
                {
                    text: "目标限定",
                    link: "/guide/getting-started/target-specify"
                },
                {
                    text: "注解",
                    link: "/guide/getting-started/annotation"
                }
            ]
        };
    },

    reference(
        collapsed: boolean,
        std: boolean = true
    ): DefaultTheme.SidebarItem {
        return {
            text: "参考",
            collapsed,
            items: [this.referenceStd(std)]
        };
    },

    referenceStd(collapsed: boolean): DefaultTheme.SidebarItem {
        return {
            text: "标准库",
            collapsed,
            items: [{ text: "print()", link: "/reference/std/print" }]
        };
    }
};
