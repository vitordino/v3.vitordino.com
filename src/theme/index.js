import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import { above } from 'etymos'

import colors from './colors'
import responsive from './responsive'
import typography from './type'
import transition from './transition'

const theme = {
	above,
	colors,
	...responsive,
	type: typography,
	transition,
}

export const ThemeProvider = ({ children }) => (
	<Provider theme={theme}>{children}</Provider>
)

export default theme
