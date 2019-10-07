import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { mapTheme, mapBreakpoints } from 'etymos'

import useLocale from '@/store/locale'
import getLocalizedContent from '@/utils/getLocalizedContent'
import Link from '@/components/Link'
import Container from '@/components/Container'
import Text from '@/components/Text'

const Wrapper = styled.nav`
	display: flex;
	justify-content: space-between;
`

const Links = styled.div`
	display: flex;
`

const HomeLink = styled(Link)`
	display: block;
`

const query = graphql`
	query NavBar {
		content: allPrismicGlobals {
			edges {
				node {
					lang
					data {
						navbar_title {
							text
						}
						navbar_links {
							text
							to
						}
					}
				}
			}
		}
	}
`

const NavBar = ({ lang }) => {
	const data = useStaticQuery(query)
	const { locale } = useLocale()
	const { navbar_title, navbar_links } = getLocalizedContent(data, locale)

	return (
		<Container>
			<Wrapper>
				<Text as={Link} to='/'>
					{navbar_title?.text}
				</Text>
				<Links>
					{navbar_links?.map(({ text, to }) => (
						<Text as={Link} to={to}>
							{text}
						</Text>
					))}
				</Links>
			</Wrapper>
		</Container>
	)
}

export default NavBar
