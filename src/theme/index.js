import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import { above } from 'etymos'

import usePersistentState from '@/hooks/usePersistentState'

import colors from './colors'
import responsive from './responsive'
import typography from './type'
import transition from './transition'

const theme = { colors, ...responsive, type: typography, transition }

const keys = {
	color: 'theme:color-mode',
	grid: 'theme:show-grid',
}

const getColor = color => ({ theme, ...p }) => {
	if (typeof theme?.colors?.[color] === 'function')
		return theme?.colors?.[color]({ theme, ...p })
	return theme?.colors?.[theme.colorMode]?.[color] || theme?.colors?.[color]
}

export const ThemeProvider = ({ children }) => {
	const [colorMode, setColorMode] = usePersistentState(keys.color, 'light')
	const [isGridVisible, setGridVisible] = usePersistentState(keys.grid, false)

	return (
		<Provider
			theme={{
				above,
				colors,
				colorMode,
				setColorMode,
				getColor,
				...responsive,
				isGridVisible,
				setGridVisible,
				type: typography,
				transition,
			}}
		>
			{children}
		</Provider>
	)
}

export default theme
