import React from 'react'
import styled, { withTheme, css } from 'styled-components'
import { useMediaQuery, useWindowSize, useCurrentBreakpoint } from 'etymos'

import { useGridMode } from '~/store'
import Grid from '~/components/Grid'
import Container from '~/components/Container'

/* eslint-disable */
const leftPad = s => ((s + '').length === 1 ? '0' + s : '' + s)
const fromArray = n => Array.from({ length: n }, (v, i) => leftPad(i + 1))

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	overflow: hidden;
	transition: 0.2s all;
	z-index: 10;
	user-select: none;
	pointer-events: none;
	transition: 0.1s opacity;
`

const Breakpoint = styled.pre`
	position: absolute;
	font-size: 0.875rem;
	color: #ff000066;
	bottom: 0.35rem;
	left: 0.875rem;
	transform-origin: top left;
	transform: rotate(-90deg);
	transition: 0.35s opacity;
	opacity: ${p => (p.visible ? 1 : 0)} ;
`

const D = styled.pre`
	color: ${p => (p.visible ? '#ff000066' : '#ff000000')};
	min-height: 100vh;
	display: flex;
	align-items: flex-end;
	font-size: 0.75rem;
	font-weight: 500;
	padding-bottom: 0.25rem;
	transition: 0.35s color ${p => p.delay}ms ease-out;
	position: relative;
	${p =>
		p.visible &&
		css`
			transition: 0.35s color ${p => p.reverseDelay + 75}ms ease-in;
		`}
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transform: scaleY(0);
		transition: 0.35s all ${p => p.delay + 75}ms ease-out;
		transform-origin: top;
		background: #ff000000;
		${p =>
			p.visible &&
			css`
				transition: 0.35s all ${p => p.reverseDelay}ms ease-in;
				transform: scaleY(1);
				background: #ff000011;
			`};
	}
`

const GridOverlay = ({ theme }) => {
	const [visible] = useGridMode()
	const { innerWidth } = useWindowSize()
	const currentBreakpoint = useCurrentBreakpoint()
	const belowSM = useMediaQuery({ below: 'sm' })
	const aboveSMBelowMD = useMediaQuery({ above: 'sm', below: 'md' })

	return (
		<Wrapper>
			<Container>
				<Grid.Row>
					{fromArray(theme.columns).map((x, i, { length }) => (
						<Grid.Column key={x} xs={i % 4 ? 0 : 4} sm={i % 2 ? 0 : 2} md={1}>
							<D
								visible={visible}
								delay={(length - i) * 50}
								reverseDelay={i * 50}
							>
								{x}
								{belowSM && <span> - {leftPad(i + 4)}</span>}
								{aboveSMBelowMD && <span> - {leftPad(i + 2)}</span>}
							</D>
						</Grid.Column>
					))}
				</Grid.Row>
			</Container>
			<Breakpoint visible={visible}>
				<strong>{currentBreakpoint}</strong>: {innerWidth}px
			</Breakpoint>
		</Wrapper>
	)
}

export default withTheme(GridOverlay)
