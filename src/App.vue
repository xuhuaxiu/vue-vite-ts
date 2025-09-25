<script setup lang="ts">
import { useTypedI18n } from './i18n'
import { storeToRefs } from 'pinia'
import { useUserStore } from './stores/user.ts'
const { t, locale } = useTypedI18n()
// 使用 store
const user = useUserStore()
// 响应式解构
const { token, userInfo, isLogin } = storeToRefs(user)
import HelloWorld from './components/HelloWorld.vue'
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
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <h1>{{ t('login') }} : {{ isLogin}}</h1>
  <p>{{ t('token') }} : {{ token}}</p>
  <p>{{ t('userName') }} : {{ userInfo?.name}}</p>
  <button @click="login">{{ t('login') }}</button>
  <button @click="logout">{{ t('logout') }}</button>
  <select v-model="locale">
    <option value="en">English</option>
    <option value="zh">中文</option>
  </select>
<!--  <div>
    <p>{{ t('hello') }}</p>
    <button @click="setLang('zh')"> {{ t('change_lang') }} 中文</button>
    <button @click="setLang('en')"> {{ t('change_lang') }} 英文</button>
  </div>-->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
