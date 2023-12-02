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
                }
            ]
        }
    ];
}

export function sidebar(): DefaultTheme.SidebarMulti {
    return {
        "/guide/": {
            base: "/guide/",
            items: sidebarGuide()
        }
    };
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "Introduction",
            collapsed: false,
            items: [
                {
                    text: "What is Whirlscript?",
                    link: "/introduction/what-is-whirlscript"
                }
            ]
        },
        {
            text: "Getting Started",
            collapsed: false,
            items: [
                {
                    text: "Getting Started",
                    link: "/getting-started/getting-started"
                }
            ]
        }
    ];
}
