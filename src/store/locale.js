import useStore from '.'

const useLocale = () =>
	useStore(s => ({
		locales: s.locales,
		locale: s.locale,
	}))

export default useLocale
