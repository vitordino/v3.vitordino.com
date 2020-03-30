import React from 'react'
import styled, { css } from 'styled-components'

import Text from '@/components/Text'
import Container from '@/components/Container'
import ColorMode from '@/components/ColorMode'

const Wrapper = styled.div`
	${({ color, background, theme }) => css`
		color: var(--color-${color});
		background: var(--color-${background});
		${theme.transition.get()};
	`}
`

const Caption = styled(Text).attrs({
	as: 'figcaption',
	background: 'base03',
	color: 'base66',
})`
	display: block;
	padding: 1.5rem 0;
	max-width: 2400px;
	margin: auto;
	a {
		text-decoration: underline;
	}
`

const ImageSlice = ({ colorMode, children, caption }) => (
	<ColorMode mode={colorMode}>
		<Wrapper as='figure'>
			{children}
			{caption && (
				<Caption>
					<Container>{caption}</Container>
				</Caption>
			)}
		</Wrapper>
	</ColorMode>
)

ImageSlice.defaultProps = {
	color: 'base',
	background: 'base00',
}

export default ImageSlice
