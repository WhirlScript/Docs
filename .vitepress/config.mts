import { defineConfig } from "vitepress";
import { nav as navEn } from "./locale/en";
import { nav as navZh } from "./locale/zh";
import { sidebar as sidebarEn } from "./locale/en";
import { sidebar as sidebarZh } from "./locale/zh";
import * as path from "path";

export default defineConfig({
    locales: {
        root: {
            label: "English",
            lang: "en",
            title: "WhirlsScript",
            titleTemplate: "WhirlScript Docs",
            description: "A next generation script language",
            themeConfig: {
                editLink: {
                    pattern:
                        "https://github.com/WhirlScript/docs/edit/master/:path",
                    text: "Edit this page on GitHub"
                },
                nav: navEn(),
                sidebar: sidebarEn()
            },
            head: [["meta", { name: "og:locale", content: "en" }]]
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
                        "https://github.com/WhirlScript/docs/edit/master/:path",
                    text: "在 GitHub 上编辑此页"
                },
                nav: navZh(),
                sidebar: sidebarZh()
            },
            head: [["meta", { name: "og:locale", content: "zh" }]]
        }
    },

    srcExclude: ["README.md"],

    lastUpdated: true,
    cleanUrls: true,

    markdown: {
        math: true,
        languages: [{
            id: "whirlscript",
            scopeName: "source.whirlscript",
            displayName: "WhirlScript",
            aliases: ["wrs"],
            path: path.resolve(__dirname, "extension/languages/whirlscript.tmLanguage.json")
        }]
    },

    sitemap: {
        hostname: "https://whirlsctipt.github.io/"
    },

    /* prettier-ignore */
    head: [
        ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
        ["meta", { name: "theme-color", content: "#4879A8" }],
        ["meta", { name: "og:type", content: "website" }],
        ["meta", { name: "og:site_name", content: "WhirlScript" }]
        // ['meta', { name: 'og:image', content: '' }],
    ],

    themeConfig: {
        logo: { src: "/logo-large.svg", width: 24, height: 24 },

        search: {
            provider: "local"
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
