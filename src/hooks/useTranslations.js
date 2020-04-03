import useLocale from '~/store/locale'
import translations from '../../content/translations'

function useTranslations() {
	const { locale } = useLocale()
	return translations[locale]
}

export default useTranslations
