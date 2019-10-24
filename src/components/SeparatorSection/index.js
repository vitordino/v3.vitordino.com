import React from 'react'
import styled from 'styled-components'
import Grid from '@/components/Grid'
import Text from '@/components/Text'
import Spacer from '@/components/Spacer'

const Wrapper = styled.div``

const DesktopLine = styled.div`
	border-top: 1px solid ${({ theme }) => theme.colors.get('base06')};
	display: none;
	margin-bottom: 2.5rem;
	${({ theme }) => theme.above('md')`
		display: block;
	`}
`

const TitleBar = styled.div``

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
			<Grid.Column xs={16} md={4} lg={3} xg={2}>
				<TitleBar>
					<Text color='base44'>{title}</Text>
					<MobileLine />
				</TitleBar>
			</Grid.Column>
			{children}
		</Grid.Row>
	</Wrapper>
)

export default SeparatorSection
