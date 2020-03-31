import React, { StrictMode, useLayoutEffect } from 'react'

import { AppProvider, useColorMode } from '@/store'
import { ThemeProvider } from '@/theme'
import GlobalStyle from '@/components/Layout/GlobalStyle'

const ThemeModeSideEffect = () => {
	const [colorMode] = useColorMode()
	useLayoutEffect(() => window.__setTheme(colorMode), [colorMode])
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
