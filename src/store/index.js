import React, { createContext, useMemo } from 'react'
import locales from '../../content/i18n'
import createStorage from '../hooks/contextStorage'

const Context = createContext()

const keys = {
	color: 'theme:color-mode',
	grid: 'theme:show-grid',
}

const colorModeStorage = createStorage(keys.color, 'light')
const ColorModeProvider = colorModeStorage[0]

const gridModeStorage = createStorage(keys.grid, false)
const GridModeProvider = gridModeStorage[0]

export const useContext = () => React.useContext(Context)

export const AppProvider = ({ locale, children }) => {
	const values = useMemo(() => ({ locales, locale }), [locale])
	return (
		<ColorModeProvider>
			<GridModeProvider>
				<Context.Provider value={values}>{children}</Context.Provider>
			</GridModeProvider>
		</ColorModeProvider>
	)
}

export const useColorMode = colorModeStorage[1]
export const useGridMode = gridModeStorage[1]
