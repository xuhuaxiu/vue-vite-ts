import { defineStore } from 'pinia'
import type { UserInfo } from '@/types/user.ts'
export const useUserStore = defineStore('user', {
    state: () => ({
        token:  '' as string,
        userInfo: null as UserInfo | null // 用户信息
    }),
    getters: {
        isLogin: (state) => !!state.token
    },
    actions: {
        setToken(token: string) {
            this.token = token
        },
        setUserInfo(user: UserInfo) {
            this.userInfo = user
        },
        logout() {
            this.token = ''
            this.userInfo = null
        }
    }
})
