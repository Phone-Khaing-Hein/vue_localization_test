import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    locale: 'en',
    allowComposition: true, // you need to specify that!
    messages: {
        en: require('./locales/en.json'),
        ja: require('./locales/ja.json')
    }
})

const app = createApp(App);
app.use(i18n);
app.mount('#app');
