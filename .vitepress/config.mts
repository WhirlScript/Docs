import { defineConfig, type DefaultTheme } from "vitepress";

export default defineConfig({
    locales: {
        root: {
            label: "English",
            lang: "en",
            title: "WhirlsScript",
            titleTemplate: "WhirlScript Docs",
            description: "A next generation script language"
        },
        zh: {
            label: "简体中文",
            lang: "zh",
            link: "/zh/",
            title: "WhirlsScript",
            titleTemplate: "WhirlScript 文档",
            description: "下一代脚本语言",
            themeConfig: {
                editLink: {
                    pattern:
                        "https://github.com/WhirlScript/docs/edit/master/docs/:path",
                    text: "在 GitHub 上编辑此页"
                },
                sidebar: sidebarGuideZh()
            }
        }
    },

    srcExclude:["README.md"],

    lastUpdated: true,
    cleanUrls: true,

    markdown: {
        math: true
    },

    sitemap: {
        hostname: "https://whirlsctipt.github.io/"
    },

    /* prettier-ignore */
    head: [
        ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
        ["meta", { name: "theme-color", content: "#4879A8" }],
        ["meta", { name: "og:type", content: "website" }],
        ["meta", { name: "og:locale", content: "en" }],
        ["meta", { name: "og:site_name", content: "WhirlScript" }]
        // ['meta', { name: 'og:image', content: '' }],
    ],

    themeConfig: {
        logo: { src: "/logo-large.svg", width: 24, height: 24 },

        nav: nav(),

        sidebar: {
            "/guide/": { base: "/guide/", items: sidebarGuide() }
        },

        editLink: {
            pattern:
                "https://github.com/WhirlScript/docs/edit/master/docs/:path",
            text: "Edit this page on GitHub"
        },

        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" }
        ],

        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2019-present Bluemangoo"
        }
    }
});

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "Guide",
            link: "/guide/what-is-whirlscript",
            activeMatch: "/guide/"
        }
    ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "Introduction",
            collapsed: false,
            items: [
                {
                    text: "What is Whirlscript?",
                    link: "/guide/what-is-whirlscript"
                },
                { text: "Getting Started", link: "/guide/getting-started" }
            ]
        }
    ];
}

function sidebarGuideZh(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "介绍",
            collapsed: false,
            items: [
                {
                    text: "什么是 Whirlscript？",
                    link: "/zh/guide/what-is-whirlscript"
                },
                { text: "立即开始", link: "/zh/guide/getting-started" }
            ]
        }
    ];
}
