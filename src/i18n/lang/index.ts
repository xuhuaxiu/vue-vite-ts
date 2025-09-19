import { zh } from './zh'
import { en } from './en'

// 定义语言包
export const messages = {
    zh,
    en,
}

export type Messages = typeof messages  // 根据文件类型做代码追踪
export type MessageSchema = Messages[keyof Messages];
