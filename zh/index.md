---
layout: home

title: Whirlscript
titleTemplate: 下一代脚本语言

hero:
  name: Whirlscript
  text: |
    下一代
    脚本语言
  tagline: |
    可读、可维护的代码，
    编译为干净的 bat 和 sh 脚本。
  actions:
    - theme: brand
      text: 立即开始
      link: /zh/guide/getting-started/getting-started
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/Bluemangoo/WhirlScript
  image:
    src: /logo-large.svg
    alt: WhirlScript

features:
  - icon: 📝
    title: 专注于逻辑
    details: 减少花在原生脚本语言糟糕语法上的功夫。
  - icon: 🍬
    title: 甜甜的语法
    details: 大量的语法糖，包你满意。
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 220.8"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z"/><path fill="#41B883" d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z"/><path fill="#35495E" d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z"/></svg>
    title: 交叉编译
    details: 只需写一份代码，即可编译为全平台的脚本。
  - icon: 📦
    title: 包管理器支持
    details: 支持 Whirlpool 包。可以更轻松地找到和使用已有的轮子。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #4879A8 30%, #B0D8F2);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #4879A8 50%, #B0D8F2 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
