import React from 'react'
import GatsbyLayout from '~/components/Layout/Gatsby'

export const onClientEntry = async () => {
	if (typeof IntersectionObserver === `undefined`) {
		await import(`intersection-observer`)
	}
}

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ element, props }) => (
	<GatsbyLayout {...props}>{element}</GatsbyLayout>
)

export const shouldUpdateScroll = ({ prevRouterProps, routerProps }) => {
	if(prevRouterProps.location.search.startsWith('?')) return false
	if(routerProps.location.search.startsWith('?')) return false
  return true
}
