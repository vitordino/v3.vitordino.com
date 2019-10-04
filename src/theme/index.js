import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'

import usePersistentState from '@/hooks/usePersistentState'

import colors from './colors'
import responsive from './responsive'
import typography from './type'

const theme = { colors, ...responsive, type: typography }

const keys = {
	color: 'theme:color-mode',
	grid: 'theme:show-grid',
}

export const ThemeProvider = ({ children }) => {
	const [colorMode, setColorMode] = usePersistentState(keys.color, 'light')
	const [isGridVisible, setGridVisible] = usePersistentState(keys.grid, false)

	return (
		<Provider
			theme={{
				colors: { ...colors, mode: colorMode, setColorMode },
				...responsive,
				isGridVisible,
				setGridVisible,
				type: typography,
			}}
		>
			{children}
		</Provider>
	)
}

export default theme
