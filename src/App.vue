<script setup lang="ts">
import { useTypedI18n } from './i18n'

const { t, locale } = useTypedI18n()
import HelloWorld from './components/HelloWorld.vue'

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
  <h1>{{ t('login') }}</h1>
  <p>{{ t('userName') }}</p>
  <button>{{ t('password') }}</button>
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
