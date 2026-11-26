import { defineConfig } from 'vitepress'
import { search as ruSearch } from "./ru";

// https://vitepress.dev/reference/site-config
export const shared = defineConfig({
  title: "InteractorsMC Wiki",
  description: "Official documentation for InteractorsMC projects",
  cleanUrls: true,

  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  base: '/',

  rewrites: {
    'en/:rest*': ':rest*',
  },

  themeConfig: {
    socialLinks: [
      { icon: 'modrinth', link: 'https://modrinth.com/mod/InteractiveMC' },
      { icon: 'github', link: 'https://github.com/InteractorsMC' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: { ...ruSearch }
      }
    }
  },

  sitemap: {
    hostname: 'https://interactivemc.clwn.org'
  }
})