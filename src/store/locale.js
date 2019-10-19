import { useContext } from '.'

const useLocale = () => {
	const { locale, locales } = useContext()
	return { locale, locales }
}

export default useLocale
