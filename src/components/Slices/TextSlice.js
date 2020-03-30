import React from 'react'
import styled, { css } from 'styled-components'

import getTypeStyle from '@/utils/getTypeStyle'

import ColorMode from '@/components/ColorMode'
import Container from '@/components/Container'
import Text from '@/components/Text'
import Spacer from '@/components/Spacer'
import Grid from '@/components/Grid'

const Wrapper = styled.div`
	${({ color, background, theme }) => css`
		color: var(--color-${color});
		background: var(--color-${background});
		${theme.transition.get()};
	`}
`

const counterContainer = css`
	${p => p.theme.above('md')`
		margin-left: -2rem;
		margin-right: -2rem;
		padding: 2rem 2rem;
	`}
	${p => p.theme.above('lg')`
		margin-left: -8.675%;
		margin-right: -8.675%;
		padding: 2rem 8.675%;
		border-radius: 0.125rem;
	`}
	${p => p.theme.above('xg')`
		margin-left: -10.5%;
		margin-right: -10.5%;
		padding: 2rem 10.5%;
	`}
`

const Content = styled(Text)`
	& > * + * {
		margin-top: 1.75em;
	}

	code {
		background: var(--color-base06);
		padding: 0 0.25em;
		border-radius: 0.125rem;
	}

	pre {
		${p => p.theme.transition.get('background')};
		background: ${p => p.theme.colors.dark.base03};
		color: ${p => p.theme.colors.dark.base};
		overflow: auto;
		margin-left: -1rem;
		margin-right: -1rem;
		margin-bottom: 4rem;
		padding: 2rem 1rem;
		${getTypeStyle(1)};
		${counterContainer}
		code {
			background: none;
			padding: 0;
			border-radius: 0;
		}
	}

	a {
		text-decoration: underline;
	}

	ol {
		list-style: decimal-leading-zero;
	}

	ul {
		list-style: circle;
	}

	ol, ul {
		& > * + * {
			margin-top: 1.75em;
		}
		p:first-child {
			display: inline;
			${p => p.theme.above('md')`
				display: block;
			`}
		}
	}

	li {
		margin-top: 1.75em;
		list-style-position: inside;
		${p => p.theme.above('md')`
			list-style-position: outside;
		`}
	}


	hr {
		height: 32px;
		position: relative;
		overflow: hidden;
		color: var(--color-base22);
		margin-top: 6rem;
		margin-bottom: 6rem;
		${counterContainer};
		padding-top: 0 !important;
		padding-bottom: 0 !important;
		&:before {
			content: '';
			position: absolute;
			left: 0;
			top: 50%;
			background: currentColor;
			width: 100%;
			height: 1px;
			${p => p.theme.transition.get()};
		}
		&:after {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			background: var(--color-base00);
			z-index: 1;
			width: 32px;
			height: 34px;
			transform: translate(-50%, -50%) skewX(-45deg);
			box-shadow: 0 0 0 1.5px currentColor;
			${p => p.theme.transition.get()};
		}
	}

	blockquote {
		position: relative;
		padding-left: 2rem;
		${p => p.theme.above('sm')`
			padding-left: 3rem;
		`}
		${p => p.theme.above('md')`
			padding-left: 6.375%;
		`}
		${p => p.theme.above('lg')`
			padding-left: 0;
		`}
		&:before {
			content: '';
			position: absolute;
			background: var(--color-base11);
			height: 100%;
			width: 4px;
			left: 0;
			${p => p.theme.above('lg')`
				top: -1rem;
				height: calc(100% + 2rem);
				padding-left: 0;
				left: -8.675%;
			`}
			${p => p.theme.above('xg')`
				left: -10.5%;
			`}
		}
	}
`

const TextSlice = ({ color, background, colorMode, children }) => (
	<ColorMode mode={colorMode}>
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
	</ColorMode>
)

TextSlice.defaultProps = {
	color: 'base',
	background: 'base00',
}

export default TextSlice
