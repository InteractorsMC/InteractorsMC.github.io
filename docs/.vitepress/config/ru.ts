import { defineConfig, type DefaultTheme } from 'vitepress'
import { version } from "./global";

export const ru = defineConfig({
    lang: 'ru-RU',
    description: 'Официальная документация проектов InteractorsMC',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/ru/interactivemc/player/': sidebarInteractiveMCPlayer(),
            '/ru/interactivemc/developer/': sidebarInteractiveMCDeveloper(),
            '/ru/interactivity/player/': sidebarInteractivityPlayer(),
            '/ru/interactivity/developer/': sidebarInteractivityDeveloper(),
        },

        editLink: {
            pattern: 'https://github.com/Timtaran/interactivemc-docs/edit/master/docs/:path',
            text: 'Редактировать страницу'
        },

        footer: {
            message: 'NOT AN OFFICIAL MINECRAFT WEBSITE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT',
            copyright: '© 2026 - InteractorsMC. Опубликовано под лицензией <a href = "https://github.com/Timtaran/interactivemc-docs/blob/master/LICENSE">Creative Commons</a>'
        },

        outline: { label: 'Содержание страницы' },

        docFooter: {
            prev: 'Предыдущая страница',
            next: 'Следующая страница'
        },

        lastUpdated: {
            text: 'Обновлено'
        },

        darkModeSwitchLabel: 'Оформление',
        lightModeSwitchTitle: 'Переключить на светлую тему',
        darkModeSwitchTitle: 'Переключить на тёмную тему',
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Вернуться к началу',
        langMenuLabel: 'Изменить язык',
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'InteractiveMC',
            items: [
                { text: 'Игрокам', link: '/ru/interactivemc/player/' },
                { text: 'Разработчикам', link: '/ru/interactivemc/developer/' },
            ]
        },
        {
            text: 'Interactivity',
            items: [
                { text: 'Игрокам', link: '/ru/interactivity/player/' },
                { text: 'Разработчикам', link: '/ru/interactivity/developer/' },
            ]
        },
        {
            text: version,
            items: [
                {
                    text: 'Изменения',
                    link: 'https://github.com/Timtaran/InteractiveMC/blob/master/CHANGELOG.md'
                },
                {
                    text: 'Вклад',
                    link: 'https://github.com/Timtaran/InteractiveMC/blob/master/.github/contributing.md'
                }
            ]
        }
    ]
}

function sidebarInteractiveMCPlayer(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'InteractiveMC: Игроки',
            items: [
                { text: 'Гайды для игроков', link: '/ru/interactivemc/player/' },
                { text: 'Установка', link: '/ru/interactivemc/player/install' },
                { text: 'Конфигурация', link: '/ru/interactivemc/player/config' },
            ]
        }
    ]
}


function sidebarInteractiveMCDeveloper(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'InteractiveMC: Разработчики',
            items: [
                { text: 'Гайды для разработчиков', link: '/ru/interactivemc/developer/' },
                {
                    text: "Вступление", collapsed: false, items: [
                        { text: 'Шаблон', link: '/ru/interactivemc/developer/intro/template' },
                        { text: 'Добавление зависимости', link: '/ru/interactivemc/developer/intro/depend' },
                        { text: 'Создание физического тела', link: '/ru/interactivemc/developer/intro/creatingbody' },
                    ]
                }
            ]
        }
    ]
}

function sidebarInteractivityPlayer(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Interactivity: Игроки',
            items: [
                { text: 'Гайды для игроков', link: '/ru/interactivity/player/' },
            ]
        }
    ]
}

function sidebarInteractivityDeveloper(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Interactivity: Разработчики',
            items: [
                { text: 'Гайды для разработчиков', link: '/ru/interactivity/developer/' },
            ]
        }
    ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
    ru: {
        placeholder: 'Поиск в документации',
        translations: {
            button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
            },
            modal: {
                startScreen: {
                    recentSearchesTitle: 'История поиска',
                    noRecentSearchesText: 'Нет истории поиска',
                    saveRecentSearchButtonTitle: 'Сохранить в истории поиска',
                    removeRecentSearchButtonTitle: 'Удалить из истории поиска',
                    favoriteSearchesTitle: 'Избранное',
                    removeFavoriteSearchButtonTitle: 'Удалить из избранного'
                },
                errorScreen: {
                    titleText: 'Невозможно получить результаты',
                    helpText: 'Вам может потребоваться проверить подключение к Интернету'
                },
                footer: {
                    selectText: 'выбрать',
                    navigateText: 'перейти',
                    closeText: 'закрыть',
                },
                noResultsScreen: {
                    noResultsText: 'Нет результатов для',
                    suggestedQueryText: 'Вы можете попытаться узнать',
                    reportMissingResultsText:
                        'Считаете, что поиск даёт ложные результаты？',
                    reportMissingResultsLinkText: 'Нажмите на кнопку «Обратная связь»'
                }
            }
        }
    }
}