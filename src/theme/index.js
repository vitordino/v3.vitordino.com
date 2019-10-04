import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'

import usePersistentState from '@/hooks/usePersistentState'

import colors from './colors'
import responsive from './responsive'
import typography from './type'

const theme = { colors, ...responsive, type: typography }

const keys = { color: 'theme:color-mode' }

export const ThemeProvider = ({ children }) => {
	const [colorMode, setColorMode] = usePersistentState(keys.color, 'light')

	return (
		<Provider
			theme={{
				colors: { ...colors, mode: colorMode, setColorMode },
				...responsive,
				type: typography,
			}}
		>
			{children}
		</Provider>
	)
}

export default theme
