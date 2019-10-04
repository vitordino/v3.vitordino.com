import React, { useState } from 'react'
import { ThemeProvider as Provider } from 'styled-components'

import colors from './colors'
import responsive from './responsive'
import typography from './type'

const theme = { colors, ...responsive, type: typography }

const keys = { color: 'theme:color-mode' }

export const ThemeProvider = ({ children }) => {
	const stored = localStorage.getItem(keys.color)
	const [colorMode, setColorMode] = useState(stored || 'light')
	const changeColorMode = value => {
		setColorMode(value)
		if (typeof window !== 'undefined') localStorage.setItem(keys.color, value)
	}

	return (
		<Provider
			theme={{
				colors: { ...colors, mode: colorMode, changeColorMode },
				...responsive,
				type: typography,
			}}
		>
			{children}
		</Provider>
	)
}

export default theme
