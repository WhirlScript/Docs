import { DefaultTheme } from "vitepress";

export function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "Guide",
            link: "/guide/introduction/what-is-whirlscript",
            activeMatch: "/guide/"
        },
        {
            text: "Mirrors",
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
        "/guide/": {
            base: "/",
            items: [
                sidebarItem.introduction(false),
                sidebarItem.gettingStarted(false)
            ]
        }
    };
}

const sidebarItem = {
    introduction(collapsed: boolean): DefaultTheme.SidebarItem {
        return {
            text: "Introduction",
            collapsed,
            items: [
                {
                    text: "What is Whirlscript?",
                    link: "/guide/introduction/what-is-whirlscript"
                }
            ]
        };
    },

    gettingStarted(collapsed: boolean): DefaultTheme.SidebarItem {
        return {
            text: "Getting Started",
            collapsed,
            items: [
                { text: "Getting Started", link: "/guide/getting-started/getting-started" },
                { text: "Hello World!", link: "/guide/getting-started/hello-world" },
                {
                    text: "Hello Whirlpool!",
                    link: "/guide/getting-started/hello-whirlpool"
                },
                {
                    text: "Grammar and Data Types",
                    link: "/guide/getting-started/grammar-and-types"
                },
                {
                    text: "Control Flow",
                    link: "/guide/getting-started/control-flow"
                }
            ]
        };
    }
};