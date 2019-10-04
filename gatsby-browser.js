import React from 'react'

import { AppProvider } from '@/store'
import { ThemeProvider } from '@/theme'

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ element, props }) => (
	<AppProvider locale={props.pageContext.locale}>
		<ThemeProvider>
			{element}
		</ThemeProvider>
	</AppProvider>
)
