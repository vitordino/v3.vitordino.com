import React, {
	createContext,
	useMemo,
	useReducer,
	useLayoutEffect,
} from 'react'
import locales from '../../content/i18n'

const Context = createContext()

export const useContext = () => React.useContext(Context)

export const AppProvider = ({ locale, children }) => {
	const value = useMemo(() => ({ locales, locale }), [locale])
	const [key, dispatch] = useReducer(a => !a)
	useLayoutEffect(dispatch, [])
	return (
		<Context.Provider key={key} value={value}>
			{children}
		</Context.Provider>
	)
}
