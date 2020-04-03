// eslint-disable-next-line import/no-unresolved
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { createGlobalStyle, css } from 'styled-components'
import { parse } from 'query-string'
import { useNavigate, useLocation } from '@reach/router'

import SEO from '~/components/SEO'
import GridOverlay from '~/components/GridOverlay'
import ContactModal from '~/components/ContactModal'
import ColorModeSwitcher from '~/components/ColorModeSwitcher'

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
		css`
			html,
			body {
				background: var(--color-${p.background});
			}
			::selection {
				color: var(--color-${p.background});
			}
		`}
	${p =>
		p.color &&
		css`
			html,
			body {
				color: var(--color-${p.color});
			}
			::selection {
				background: var(--color-${p.color});
			}
		`}
`

const Layout = ({
	children,
	title,
	description,
	background,
	color,
	lang,
	ogImage,
	twitterImage,
}) => {
	const navigate = useNavigate()
	const { search, pathname } = useLocation()
	const { contact } = parse(search)
	const closeModal = () => navigate(pathname)

	const { site } = useStaticQuery(query)
	const hasStyle = background || color
	const meta = {
		title,
		description: description || site.meta.description,
		ogImage,
		twitterImage,
	}

	const isContactModalOpen = typeof contact !== 'undefined'

	return (
		<>
			{hasStyle && <OverwriteStyles color={color} background={background} />}
			<SEO {...meta} lang={lang} />
			{children}
			<GridOverlay />
			<ColorModeSwitcher />
			<ContactModal isOpen={isContactModalOpen} onClose={closeModal} />
		</>
	)
}

export default Layout
