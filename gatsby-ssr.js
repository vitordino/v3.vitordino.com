import React from 'react'
import { AppProvider } from '@/store'

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ element, props }) => (
	<AppProvider locale={props.pageContext.locale}>{element}</AppProvider>
)

export const onRenderBody = ({ setPostBodyComponents }) => {
	setPostBodyComponents([
		React.createElement('div', { id: 'portal-root', key: 'portal-root' }),
	])
}
