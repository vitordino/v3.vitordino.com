import React from 'react'
import styled from 'styled-components'

import Container from '@/components/Container'
import Text from '@/components/Text'
import Spacer from '@/components/Spacer'
import Grid from '@/components/Grid'

const getColor = color => p => p.theme.colors.get(color) || color

const Wrapper = styled.div`
	color: ${p => getColor(p.color)};
	background: ${p => getColor(p.background)};
`

const Content = styled(Text)`
	& > * + * {
		margin-top: 1.75em;
	}

	code {
		background: ${p => getColor('base06')};
		padding: 0 0.25em;
		border-radius: 0.125rem;
	}
`

const TextSlice = ({ color, background, children }) => (
	<Wrapper as='section' color={color} background={background}>
		<Container>
			<Spacer.V xs={8} />
			<Grid.Row>
				<Grid.Column xs={0} lg={1} xg={2} />
				<Grid.Column xs={16} lg={12} xg={10}>
					<Content xs={1} md={3}>
						{children}
					</Content>
				</Grid.Column>
			</Grid.Row>
		</Container>
		<Spacer.V xs={12} />
	</Wrapper>
)

TextSlice.defaultProps = {
	color: 'base',
	background: 'base00',
}

export default TextSlice
