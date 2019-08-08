import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import { Provider as GridingProvider } from 'griding'

import colors from './colors'
import grid from './grid'
import typography from './type'

const theme = {
	colors,
	grid,
	type: typography,
}

export const ThemeProvider = ({ children, props }) => (
	<Provider theme={theme} {...props}>
		<GridingProvider {...grid}>{children}</GridingProvider>
	</Provider>
)

export default theme
