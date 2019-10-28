// eslint-disable-next-line import/no-unresolved
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

import SEO from '@/components/SEO'
import GridOverlay from '@/components/GridOverlay'
import ColorModeSwitcher from '@/components/ColorModeSwitcher'

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

const OverwriteStyles = createGlobalStyle`
	${p =>
		p.background &&
		`
		html, body { background: ${p.theme.colors.get(p.background)(p)} }
		::selection { color: ${p.theme.colors.get(p.background)(p)} }
	`}
	${p =>
		p.color &&
		`
		html, body { color: ${p.theme.colors.get(p.color)(p)} }
		::selection { background: ${p.theme.colors.get(p.color)(p)} }
	`}
`

const Layout = ({ children, title, description, background, color, lang }) => {
	const { site } = useStaticQuery(query)
	const hasStyle = background || color
	const meta = {
		title: title || site.meta.title,
		description: description || site.meta.description,
	}
	return (
		<>
			{hasStyle && <OverwriteStyles color={color} background={background} />}
			<SEO {...meta} lang={lang} />
			{children}
			<GridOverlay />
			<ColorModeSwitcher />
		</>
	)
}

export default Layout
