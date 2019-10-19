import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { mapTheme, mapBreakpoints } from 'etymos'

import useLocale from '@/store/locale'
import getLocalizedContent from '@/utils/getLocalizedContent'
import BaseLink from '@/components/Link'
import Container from '@/components/Container'
import Text from '@/components/Text'

const Wrapper = styled.div`
	top: -1px;
	margin-bottom: -1px;
	position: sticky;
	margin-top: 2.5rem;
`

const Inner = styled.nav`
	justify-content: space-between;
	border-top: 1px solid currentColor;
	border-bottom: 1px solid transparent;
	background: ${({ theme }) => theme.colors.get('base00')};
	${'' /* background: red; */}
`

const Links = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 1rem -1rem;
	flex: 1;
	text-transform: lowercase;
`

const Link = styled(BaseLink)`
	padding: 1rem;
`

const Right = styled.div`
	display: flex;
`

const Bottom = styled.div`
	background: ${({ theme }) => theme.colors.get('base00')};
	${'' /* background: green; */}
	border-bottom: 1px solid white;
	height: 1.5rem;
	${'' /* transform: translateY(1.5rem); */}
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
		<Wrapper>
			<Container>
				<Inner>
					<Links>
						<Text as={Link} weight={500} to='/'>
							{navbar_title?.text}
						</Text>
						<Right>
							{navbar_links?.map(({ text, to }) => (
								<Text as={Link} to={to}>
									{text}
								</Text>
							))}
						</Right>
					</Links>
				</Inner>
				<Bottom />
			</Container>
		</Wrapper>
	)
}

export default NavBar
