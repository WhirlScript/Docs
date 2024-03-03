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
                    text: "什么是 WhirlScript？",
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
                    text: "Hello Whirlpkg!",
                    link: "/guide/getting-started/hello-whirlpkg"
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
                    text: "模板字符串",
                    link: "/guide/getting-started/template-string"
                },
                {
                    text: "结构体",
                    link: "/guide/getting-started/struct"
                },
                {
                    text: "命名空间",
                    link: "/guide/getting-started/namespace"
                },
                {
                    text: "目标限定",
                    link: "/guide/getting-started/target-specify"
                },
                {
                    text: "注解",
                    link: "/guide/getting-started/annotation"
                },
                {
                    text: "模块",
                    link: "/guide/getting-started/modules"
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


export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
    zh: {
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索文档',
          buttonAriaLabel: '搜索文档'
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消'
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存至搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除'
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接'
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索提供者'
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为该查询应该有结果？',
            reportMissingResultsLinkText: '点击反馈'
          }
        }
      }
    }
  }