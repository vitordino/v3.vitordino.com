import React from 'react'
import { ThemeProvider, withTheme } from 'styled-components'

const getTheme = ({ theme, mode }) => ({
	...theme,
	colors: {
		...theme.colors,
		mode,
	},
})

const ColorMode = ({ theme, mode, children }) => {
	if (!mode) return children
	const _theme = getTheme({ theme, mode })
	return <ThemeProvider theme={_theme}>{children}</ThemeProvider>
}

export default withTheme(ColorMode)
