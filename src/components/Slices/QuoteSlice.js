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
	* + * {
		margin-top: 1.75em;
	}
`

const QuoteSymbolDecoration = styled.div`
	font-size: 4rem;
	line-height: 1rem;
	color: ${p => getColor('base11')};
	${p => p.theme.above('lg')`
		text-align: right;
		font-size: 6rem;
		line-height: 4rem
	`}
	font-weight: 500;
	&:after {
		content: '“';
	}
`

const QuoteSlice = ({ color, background, children, author }) => (
	<Wrapper as='section' color={color} background={background}>
		<Container>
			<Spacer.V xs={8} />
			<Grid.Row>
				<Grid.Column xs={16} lg={1} xg={2}>
					<QuoteSymbolDecoration />
				</Grid.Column>
				<Grid.Column xs={16} sm={14} md={12}>
					{children && (
						<Content as='blockquote' xs={2} sm={5} lg={6} weight={500}>
							{children}
						</Content>
					)}
					{author && (
						<>
							<Spacer.V xs={2} />
							<Text as='cite' xs={0} color='base44'>
								{author}
							</Text>
						</>
					)}
				</Grid.Column>
			</Grid.Row>
		</Container>
		<Spacer.V xs={8} />
	</Wrapper>
)

QuoteSlice.defaultProps = {
	color: 'base',
	background: 'base03',
}

export default QuoteSlice
