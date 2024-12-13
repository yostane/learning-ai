import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import { seoPlugin } from "@vuepress/plugin-seo";
import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
//import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  
  base: "/learning-ai/",
  port: 3000,

  head: [
    ["link", { rel: "icon", href: "/learning-ai/favicon.ico" }],
    [
      "link",
      { rel: "manifest", href: "/learning-ai/manifest.webmanifest" },
    ],
    ["meta", { name: "theme-color", content: "#00A67E" }],
  ],

  theme: defaultTheme({
        logo: 'logo_worldline.png',
        repo: 'https://github.com/worldline/learning-ai',

        sidebar: [
          { text: 'Home', link: '/' },
          "/overview/",
          "/use/",
          "/llm/",
          "/offline/",
          "/develop/",
          "/servicesai/"
        ], 
  }),
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  /*bundler: webpackBundler({
    webpackOptions: {},
    vuePluginOptions: {},
  }),*/

  plugins: [
    seoPlugin({
      hostname: "https://worldline.github.io/learning-ai",
    }),
    searchPlugin({
      // options du plugin de recherche
    }),
    nprogressPlugin(),
    pwaPlugin({
      // options du plugin PWA
    }),
  ],
});
