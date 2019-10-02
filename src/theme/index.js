import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'

import colors from './colors'
import responsive from './responsive'
import typography from './type'

const theme = {
	colors,
	...responsive,
	type: typography,
}

export const ThemeProvider = ({ children, ...props }) => (
	<Provider theme={theme} {...props}>
		{children}
	</Provider>
)

export default theme
