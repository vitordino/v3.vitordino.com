import React, { StrictMode } from 'react'
import { AppProvider } from '@/store'
import { ThemeProvider } from '@/theme'

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ element, props }) => (
	<StrictMode>
		<AppProvider locale={props.pageContext.locale}>
			<ThemeProvider>
				{element}
			</ThemeProvider>
		</AppProvider>
	</StrictMode>
)

export const onRenderBody = ({ setPostBodyComponents }) => {
	setPostBodyComponents([
		React.createElement('div', { id: 'portal-root', key: 'portal-root' }),
	])
}
