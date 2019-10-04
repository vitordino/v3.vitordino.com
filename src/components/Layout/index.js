// eslint-disable-next-line import/no-unresolved
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SEO from '@/components/SEO'
import GridOverlay from '@/components/GridOverlay'
import ColorModeSwitcher from '@/components/ColorModeSwitcher'
import GlobalStyle from './GlobalStyle'

const query = graphql`
	query LayoutQuery {
		site {
			meta: siteMetadata {
				title
				description
			}
		}
	}
`

const Layout = ({ children, title, description, background, color, lang }) => {
	const { site } = useStaticQuery(query)
	const meta = {
		title: title || site.meta.title,
		description: description || site.meta.description,
	}
	return (
		<>
			<SEO {...meta} lang={lang} />
			<GlobalStyle background={background} color={color} />
			{children}
			<GridOverlay />
			<ColorModeSwitcher />
		</>
	)
}

export default Layout
