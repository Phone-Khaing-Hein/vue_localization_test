import { useI18n } from 'vue-i18n';
import { computed } from 'vue'; // Use the native Composition API functions

export function useLocalization() {
    const { t, locale } = useI18n();

    const greetingMessage = computed(() => t('message.greeting'));

    const changeLocale = (newLocale) => {
        locale.value = newLocale;
    };

    return {
        locale,
        greetingMessage,
        changeLocale,
    };
}
