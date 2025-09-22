import { createI18n, useI18n as baseUseI18n } from "vue-i18n";
import { en } from './lang/en.ts'
import { zh } from './lang/zh.ts'
import type { Path } from "./types";

// 定义语言类型
export type Messages = typeof messages;
export type MessageSchema = Messages[keyof Messages];

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

// 强化 useI18n，让 t() 的 key 有类型提示
export function useTypedI18n() {
    const i18n = baseUseI18n<{ message: MessageSchema }>()

    return {
        ...i18n,
        // runtime 调用仍需把 key 转成 any 传给 vue-i18n
        t: (
            key: Path<MessageSchema>,
            // 下划波浪线不影响功能,但影响强迫症
            // i18n.t 的第二个参数类型 不是 any[] 或 unknown[]，它是 一系列元组重载（tuple 或多种可选组合）。TypeScript 不允许把一个 普通数组（any[]）用作 tuple spread，就会报这个错误。
            ...args: unknown[]) => i18n.t(key as any, ...args),
    };
}
export default i18n
