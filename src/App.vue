<template>
  <div>
      <button @click="changeLocale('en')">English</button>
      <button @click="changeLocale('ja')">Japan</button>
      <p>{{ $t('message.greeting') }}</p>
    </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
   methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
