import React from 'react'
import GatsbyLayout from '@/components/Layout/Gatsby'

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ element, props }) => (
	<GatsbyLayout {...props}>{element}</GatsbyLayout>
)
