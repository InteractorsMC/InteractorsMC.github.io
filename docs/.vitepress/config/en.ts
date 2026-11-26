import { defineConfig, type DefaultTheme } from 'vitepress'
import { version } from "./global";

export const en = defineConfig({
    lang: 'en-US',
    description: 'Official documentation for InteractorsMC projects',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/interactivemc/player/': sidebarInteractiveMCPlayer(),
            '/interactivemc/developer/': sidebarInteractiveMCDeveloper(),
            '/interactivity/player/': sidebarInteractivityPlayer(),
            '/interactivity/developer/': sidebarInteractivityDeveloper(),
        },

        editLink: {
            pattern: 'https://github.com/Timtaran/interactivemc-docs/edit/master/docs/:path',
            text: 'Edit this page on GitHub'
        },

        footer: {
            message: 'NOT AN OFFICIAL MINECRAFT WEBSITE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT',
            copyright: '© 2026 - InteractorsMC. Published under <a href = "https://github.com/Timtaran/interactivemc-docs/blob/master/LICENSE">Creative Commons</a> license'
        }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'InteractiveMC',
            items: [
                { text: 'Player guides', link: '/interactivemc/player/' },
                { text: 'Developer guides', link: '/interactivemc/developer/' },
            ]
        },
        {
            text: 'Interactivity',
            items: [
                { text: 'Player guides', link: '/interactivity/player/' },
                { text: 'Developer guides', link: '/interactivity/developer/' },
            ]
        },
        {
            text: version,
            items: [
                {
                    text: 'Changelog',
                    link: 'https://github.com/Timtaran/InteractiveMC/blob/master/CHANGELOG.md'
                },
                {
                    text: 'Contributing',
                    link: 'https://github.com/Timtaran/InteractiveMC/blob/master/.github/contributing.md'
                }
            ]
        }
    ]
}

function sidebarInteractiveMCPlayer(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'InteractiveMC — Players',
            items: [
                { text: 'Player guides', link: '/interactivemc/player/' },
                { text: 'Installation', link: '/interactivemc/player/install' },
                { text: 'Configuration', link: '/interactivemc/player/config' },
            ]
        }
    ]
}

function sidebarInteractiveMCDeveloper(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'InteractiveMC — Developers',
            items: [
                { text: 'Developer guides', link: '/interactivemc/developer/' },
                {
                    text: 'Introduction', collapsed: false, items: [
                        { text: 'Template', link: '/interactivemc/developer/intro/template' },
                        { text: 'Add a dependency', link: '/interactivemc/developer/intro/depend' },
                        { text: 'Create a physical body', link: '/interactivemc/developer/intro/creatingbody' },
                    ]
                }
            ]
        }
    ]
}

function sidebarInteractivityPlayer(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Interactivity — Players',
            items: [
                { text: 'Player guides', link: '/interactivity/player/' },
            ]
        }
    ]
}

function sidebarInteractivityDeveloper(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Interactivity — Developers',
            items: [
                { text: 'Developer guides', link: '/interactivity/developer/' },
            ]
        }
    ]
}