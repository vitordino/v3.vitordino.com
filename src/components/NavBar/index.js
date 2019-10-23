import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { useWindowScroll } from 'react-use'

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

const Background = styled.div`
	background: ${({ theme }) => theme.colors.get('base00')};
	position: absolute;
	top: -2.5rem;
	left: 0;
	bottom: 1px;
	right: 0;
	${({ theme }) => theme.transition.get()};
`

const Inner = styled.nav`
	position: relative;
	justify-content: space-between;
	border-top: 1px solid ${({ theme }) => theme.colors.get('base03')};
	${({ theme }) => theme.transition.get('border-color')};
`

const Links = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	text-transform: lowercase;
	margin: 0.5rem -1rem;
	${p => p.theme.above('md')`
		margin: 1rem -1rem;
	`}
`

const Link = styled(BaseLink)`
	padding: 1rem;
	color: ${({ theme }) => theme.colors.get('base88')};
	${({ theme }) => theme.transition.get()};
`

const Right = styled.div`
	display: flex;
`

const Bottom = styled.div`
	height: 1.5rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.get('base03')};
	${({ theme }) => theme.transition.get('border-color')};
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

const offset = y => `translateY(${Math.max(Math.min(0, -y + 40), -24)}px)`

const NavBar = ({ lang }) => {
	const data = useStaticQuery(query)
	const { locale } = useLocale()
	const { navbar_title, navbar_links } = getLocalizedContent(data, locale)
	const { y } = useWindowScroll()

	return (
		<Wrapper>
			<Background style={{ transform: offset(y) }} />
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
				<Bottom style={{ transform: offset(y) }} />
			</Container>
		</Wrapper>
	)
}

export default NavBar
