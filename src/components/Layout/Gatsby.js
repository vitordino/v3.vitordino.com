import React, { StrictMode, useEffect } from 'react'

import { AppProvider, useColorMode } from '@/store'
import { ThemeProvider } from '@/theme'
import GlobalStyle from '@/components/Layout/GlobalStyle'

const themeKey = 'data-theme'

const ThemeModeSideEffect = () => {
	const [colorMode] = useColorMode()
	useEffect(() => {
		if (typeof document !== 'object') return () => ({})
		const original = document.documentElement.getAttribute(themeKey)
		document.documentElement.setAttribute(themeKey, colorMode)
		return () => document.documentElement.setAttribute(themeKey, original)
	}, [colorMode])
	return null
}

const GatsbyLayout = ({ children, pageContext }) => (
	<StrictMode>
		<AppProvider locale={pageContext.locale}>
			<ThemeProvider>
				<>
					<GlobalStyle />
					<ThemeModeSideEffect />
					{children}
				</>
			</ThemeProvider>
		</AppProvider>
	</StrictMode>
)

export default GatsbyLayout
