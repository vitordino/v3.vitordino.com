// eslint-disable-next-line import/no-unresolved
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { ThemeProvider } from '@/theme'
import SEO from '@/components/SEO'
import GridOverlay from '@/components/GridOverlay'
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

const Layout = ({ children, title, description, background, color }) => {
	const { site } = useStaticQuery(query)
	const meta = {
		title: title || site.meta.title,
		description: description || site.meta.description,
	}
	return (
		<ThemeProvider>
			<>
				<SEO {...meta} />
				<GlobalStyle background={background} color={color} />
				{children}
				<GridOverlay />
			</>
		</ThemeProvider>
	)
}

export default Layout
