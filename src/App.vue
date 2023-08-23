<template>
  <div>
    <button @click="changeLocale('en')">English</button>
    <button @click="changeLocale('ja')">Japan</button>
    <p>{{ greetingMessage }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'; // Use the native Composition API functions
import { useLocalization } from './hooks/useLocalization';

export default defineComponent({
  setup() {
    const { locale, greetingMessage, changeLocale } = useLocalization();

    return {
      locale,
      greetingMessage,
      changeLocale,
    };
  },
});
</script>
