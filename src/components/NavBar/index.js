import React from 'react'
import styled from 'styled-components'
import { useWindowScroll } from 'react-use'

import useTranslations from '@/hooks/useTranslations'
import BaseLink from '@/components/Link'
import Container from '@/components/Container'
import Text from '@/components/Text'

const Wrapper = styled.div`
	top: -1rem;
	position: sticky;
	margin-top: 2.5rem;
	z-index: 10;
	background: var(--color-base00);
	${({ theme }) => theme.transition.get()}
`

const Inner = styled.nav`
	position: relative;
	justify-content: space-between;
`

const Top = styled.div`
	border-top: 1px solid var(--color-base06);
	margin: 0 -1rem;
	${({ theme }) => theme.transition.get()};
	${({ theme }) => theme.above('md')`margin: 0;`}
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
	color: var(--color-base88);
`

const Right = styled.div`
	display: flex;
`

const Bottom = styled.div`
	border-bottom: 1px solid var(--color-base06);
	position: relative;
	${({ theme }) => theme.transition.get()}
`

const NavBar = ({ lang }) => {
	const { navbar, paths } = useTranslations()
	return (
		<>
			<Wrapper>
				<Container>
					<Inner>
						<Top />
						<Links>
							<Text as={Link} weight={500} to={paths[navbar.main.path]}>
								{navbar.main.content}
							</Text>
							<Right>
								{navbar.items?.map(({ content, path }) => (
									<Text key={path} as={Link} to={paths[path]}>
										{content}
									</Text>
								))}
							</Right>
						</Links>
					</Inner>
				</Container>
			</Wrapper>
			<Container>
				<Bottom />
			</Container>
		</>
	)
}

export default NavBar
