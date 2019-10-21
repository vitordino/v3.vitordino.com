import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import { above } from 'etymos'

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
	const [colorMode, _setColorMode] = usePersistentState(keys.color, 'light')
	const [isGridVisible, _setGridVisible] = usePersistentState(keys.grid, false)

	return (
		<Provider
			theme={{
				above,
				colors: {
					...colors,
					mode: colorMode,
					setColorMode: v => _setColorMode(v),
				},
				...responsive,
				isGridVisible,
				setGridVisible: v => _setGridVisible(v),
				type: typography,
			}}
		>
			{children}
		</Provider>
	)
}

export default theme
