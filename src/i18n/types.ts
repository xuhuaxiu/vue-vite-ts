// 类型定义（约束 key）
// src/i18n/types.ts

/**
 * 把对象类型转成 "a.b.c" 这样的 key 路径
 */
export type Path<T, K extends keyof T = keyof T> =
    K extends string
        ? T[K] extends Record<string, any>
            ? `${K}.${Path<T[K]>}` | K
            : K
        : never;
