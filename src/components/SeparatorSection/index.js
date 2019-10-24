import React from 'react'
import styled from 'styled-components'
import Grid from '@/components/Grid'
import Text from '@/components/Text'

const Wrapper = styled.div`
	margin-bottom: 8rem;
`

const DesktopLine = styled.div`
	border-top: 1px solid ${({ theme }) => theme.colors.get('base06')};
	display: none;
	margin-bottom: 2.5rem;
	${({ theme }) => theme.above('md')`
		display: block;
	`}
`

const StickyColumn = styled(Grid.Column)`
	${({ theme }) => theme.above('md')`
		position: sticky;
		top: 6.125rem;
	`}
`

const MobileLine = styled.div`
	border-top: 1px solid ${({ theme }) => theme.colors.get('base06')};
	display: block;
	margin: 1rem -1rem;
	${({ theme }) => theme.above('md')`
		display: none;
	`}
`

const SeparatorSection = ({ title, children, ...props }) => (
	<Wrapper {...props}>
		<DesktopLine />
		<Grid.Row>
			<StickyColumn xs={16} md={4} lg={3} xg={2}>
				<Text color='base44'>{title}</Text>
				<MobileLine />
			</StickyColumn>
			{children}
		</Grid.Row>
	</Wrapper>
)

export default SeparatorSection
