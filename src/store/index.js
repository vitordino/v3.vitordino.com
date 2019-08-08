import { useEffect } from 'react'
import create from 'zustand'
import locales from '../../content/i18n'

const [useStore] = create(set => ({
	locales,
	locale: null,
	setLocale: value => set({ locale: value }),
}))

export const AppProvider = ({ locale, children }) => {
	const setLocale = useStore(s => s.setLocale)
	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		setLocale(locale)
	}, [])
	/* eslint-enable react-hooks/exhaustive-deps */
	return children
}

export default useStore
