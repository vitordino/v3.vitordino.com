import React from 'react'
import styled from 'styled-components'
import Grid from '@/components/Grid'
import Text from '@/components/Text'
import SeparatorSectionItem from './Item'

const Wrapper = styled.div`
	margin-bottom: 4rem;
`

const DesktopLine = styled.div`
	border-top: 1px solid var(--color-base06);
	display: none;
	margin-bottom: 2.5rem;
	${({ theme }) => theme.transition.get()};
	${({ theme }) => theme.above('md')`
		display: block;
	`}
`

const StickyColumn = styled(Grid.Column)`
	${({ theme }) => theme.above('md')`
		position: sticky;
		top: 6.25rem;
		padding-bottom: 4rem;
	`}
`

const MobileLine = styled.div`
	border-top: 1px solid var(--color-base06);
	display: block;
	margin: 1rem -1rem 2.5rem;
	${({ theme }) => theme.transition.get()};
	${({ theme }) => theme.above('md')`
		display: none;
	`}
`

const SeparatorSection = ({ title, children, items = [], ...props }) => (
	<Wrapper {...props}>
		<DesktopLine />
		<Grid.Row>
			<StickyColumn xs={16} md={3} lg={2}>
				<Text color='base44'>{title}</Text>
				<MobileLine />
			</StickyColumn>
			<Grid.Column xs={0} lg={2} xg={3} />
			<Grid.Column xs={16} md={12} lg={8} xg={6}>
				{children}
				{items.map((item, index) => (
					<SeparatorSectionItem key={index} {...item} />
				))}
			</Grid.Column>
		</Grid.Row>
	</Wrapper>
)

export default SeparatorSection
