import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import { seoPlugin } from "@vuepress/plugin-seo";
import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'

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

        sidebar: [
          { text: 'Home', link: '/' },
          "/overview/",
          "/use/",
          "/develop/",
          "/services/"
        ], 
  }),
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  plugins: [
    seoPlugin({
      hostname: "https://worldline.github.io/worldline/learning-ai",
    }),
  ],
});
