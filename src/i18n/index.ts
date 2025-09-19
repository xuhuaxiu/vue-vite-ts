import { createI18n, useI18n as baseUseI18n } from 'vue-i18n'
import { messages, type MessageSchema } from './lang'



// 创建 i18n 实例
export const i18n = createI18n<[MessageSchema], 'zh' | 'en'>({
    legacy: false,
    globalInjection: true,
    locale: 'zh',
    fallbackLocale: 'en',
    messages,
})

// 包一层 useI18n，让 t() 有类型提示
export function useI18n() {
    const i18n = baseUseI18n<[MessageSchema]>()
    return {
        ...i18n,
        t: (key: keyof MessageSchema, ...args: any[]) =>
            i18n.t(key as any, ...args),
    }
}

export function setLang(lang: 'zh' | 'en' | 'th') {
    i18n.global.locale.value = lang
}
