<script setup lang="ts">
import { useTypedI18n } from '@/i18n'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
const { t, locale } = useTypedI18n()
// 使用 store
const user = useUserStore()
// 响应式解构
const { token, userInfo, isLogin } = storeToRefs(user)
function login() {
  user.setToken('fake_token_123')
  user.setUserInfo({ id: '1', name: '张三', email: 'zhangsan@test.com' })
}
function logout() {
  user.logout()
}
</script>

<template>
<div>
  <h1>{{ t('login') }} : {{ isLogin}}</h1>
  <p>{{ t('token') }} : {{ token}}</p>
  <p>{{ t('userName') }} : {{ userInfo?.name}}</p>
  <button @click="login">{{ t('login') }}</button>
  <button @click="logout">{{ t('logout') }}</button>
  <select v-model="locale">
    <option value="en">English</option>
    <option value="zh">中文</option>
  </select>
</div>
</template>

<style scoped>

</style>
