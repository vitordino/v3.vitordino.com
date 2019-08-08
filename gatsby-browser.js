import React from 'react'

import { AppProvider } from '@/store'

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ element, props }) => (
	<AppProvider locale={props.pageContext.locale}>{element}</AppProvider>
)
