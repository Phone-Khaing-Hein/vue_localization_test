import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    locale: 'en', // default locale
    messages: {
        en: {
            message: {
                greeting: 'Hello!'
            }
        },
        ja: {
            message: {
                greeting: 'こんにちは！'
            }
        }
        // Define other languages here
    }
});

createApp(App).use(i18n).mount('#app');
