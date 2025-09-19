import { createI18n } from 'vue-i18n'
import en from './lang/en.ts'
import zh from './lang/zh.ts'

// 定义语言类型
export type MessageSchema = typeof en

const messages = {
    en,
    zh
}

// 获取浏览器默认语言
const getBrowserLocale = () => {
    const lang = navigator.language.toLowerCase()
    if (lang.includes('zh')) {
        return 'zh'
    }
    return 'en'
}

// 创建 i18n 实例
const i18n = createI18n<[MessageSchema], 'en' | 'zh'>({
    legacy: false, // 使用 Composition API
    locale: localStorage.getItem('locale') || getBrowserLocale(), // 默认语言
    fallbackLocale: 'en', // 回退语言
    messages
})

export default i18n
