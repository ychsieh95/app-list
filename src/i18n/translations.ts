import type { Locale } from '../types/app'

export const translations = {
  'en-us': {
    siteTitle: 'App List',
    siteSubtitle: 'A collection of apps I recommend',
    viewCard: 'Card',
    viewList: 'List',
    visit: 'Visit',
    noApps: 'No apps yet. Check back soon.',
    allCategories: 'All',
    noMatches: 'No apps match this category.',
    allPlatforms: 'All',
  },
  'zh-tw': {
    siteTitle: '應用程式清單',
    siteSubtitle: '我推薦的應用程式收藏',
    viewCard: '卡片',
    viewList: '列表',
    visit: '前往',
    noApps: '目前尚無應用程式，請稍後再回來查看。',
    allCategories: '全部',
    noMatches: '沒有符合此分類的應用程式。',
    allPlatforms: '全部',
  },
} satisfies Record<Locale, Record<string, string>>

export type TranslationKey = keyof (typeof translations)['en-us']
