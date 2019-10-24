import React from 'react'
import styled from 'styled-components'
import { useWindowScroll } from 'react-use'

import useTranslations from '@/hooks/useTranslations'
import BaseLink from '@/components/Link'
import Container from '@/components/Container'
import Text from '@/components/Text'

const Wrapper = styled.div`
	top: -1rem;
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
	border-top: 1px solid ${({ theme }) => theme.colors.get('base06')};
	${({ theme }) => theme.transition.get('border-color')};
`

const Links = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	text-transform: lowercase;
	margin: 0.75rem -1rem 1.125rem;
	${p => p.theme.above('md')`
		margin: 1rem -1rem 1.5rem;
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
	border-bottom: 1px solid ${({ theme }) => theme.colors.get('base06')};
	${({ theme }) => theme.transition.get('border-color')};
`

const offset = y => `translateY(${Math.max(Math.min(0, -y + 56), -44)}px)`

const NavBar = ({ lang }) => {
	const { y } = useWindowScroll()
	const { navbar, paths } = useTranslations()

	return (
		<Wrapper>
			<Background style={{ transform: offset(y) }} />
			<Container>
				<Inner>
					<Links>
						<Text as={Link} weight={500} to={paths[navbar.main.path]}>
							{navbar.main.content}
						</Text>
						<Right>
							{navbar.items?.map(({ content, path }) => (
								<Text as={Link} to={paths[path]}>
									{content}
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
