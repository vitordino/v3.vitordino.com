import React, { StrictMode } from 'react'

import { AppProvider } from '@/store'
import { ThemeProvider } from '@/theme'
import GlobalStyle from '@/components/Layout/GlobalStyle'

const GatsbyLayout = ({ children, pageContext }) => (
	<StrictMode>
		<AppProvider locale={pageContext.locale}>
			<ThemeProvider>
				<>
					<GlobalStyle />
					{children}
				</>
			</ThemeProvider>
		</AppProvider>
	</StrictMode>
)

export default GatsbyLayout
