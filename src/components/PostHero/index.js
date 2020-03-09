import React from 'react'
import styled from 'styled-components'
import Canvas from '@/components/Canvas'
import Container from '@/components/Container'
import Spacer from '@/components/Spacer'
import Grid from '@/components/Grid'
import Text from '@/components/Text'
import ColorMode from '@/components/ColorMode'

const Wrapper = styled.div`
	position: relative;
	background: var(--color-base00);
	color: var(--color-base);
`

const Content = styled(Container)`
	position: relative;
`

const Tags = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin: -1.5rem;
`

const Tag = styled(Text)`
	margin: 1.5rem;
	opacity: 0.5;
`

const PostHero = ({
	title,
	description,
	tags,
	canvas,
	colorMode = 'dark',
	...children
}) => (
	<ColorMode mode={colorMode}>
		<Wrapper>
			<Canvas canvas={canvas} />
			<Content>
				<Spacer.V xs={4} md={6} lg={8} />
				<Grid.Row>
					<Grid.Column xs={0} lg={1} xg={2} />
					<Grid.Column xs={16} md={10} lg={8} xg={6}>
						<Text xs={5} md={6} weight={600} case='lowercase'>
							{title}
						</Text>
						<Spacer.V xs={1} />
						<Text xs={1} md={2}>
							{description}
						</Text>
						<Spacer.V xs={4} md={6} lg={8} />
						{tags?.length && (
							<>
								<Spacer.V xs={2} md={4} />
								<Tags>
									{tags.map(tag => (
										<Tag xs={0} as='li'>
											{tag}
										</Tag>
									))}
								</Tags>
								<Spacer.V xs={1.5} />
							</>
						)}
					</Grid.Column>
				</Grid.Row>
			</Content>
		</Wrapper>
	</ColorMode>
)

export default PostHero
