import React, { useState, useEffect } from 'react'
import styled, { withTheme } from 'styled-components'
import { useMediaQuery, useWindowSize, useCurrentBreakpoint } from 'etymos'
import Grid from '@/components/Grid'
import Container from '@/components/Container'

/* eslint-disable */
const leftPad = s => ((s + '').length === 1 ? '0' + s : '' + s)
const fromArray = n => Array.from({ length: n }, (v, i) => leftPad(i + 1))

const toggle = set => () => {
	window.addEventListener('keydown', e => e.key === 'l' && set(false))
	window.addEventListener('keyup', e => e.key === 'l' && set(true))
	return () => {
		window.removeEventListener('keydown', e => e.key === 'l' && set(false))
		window.removeEventListener('keyup', e => e.key === 'l' && set(true))
	}
}

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
	opacity: ${p => (p.visible ? 1 : 0)};
	transition: 0.1s opacity;
`

const Key = styled.div`
	position: absolute;
	font-size: 0.875rem;
	color: #ff000066;
	bottom: 0;
	left: -5rem;
	transform: rotate(-90deg) translateX(50%);
	kbd {
		font-weight: 700;
		font-size: 0.75rem;
		color: #ff000088;
	}
`

const Breakpoint = styled.div`
	position: absolute;
	font-size: 0.875rem;
	color: #ff000066;
	bottom: 0.5rem;
	left: 1.75rem;
`

const D = styled.pre`
	background: #ff000011;
	color: #ff000044;
	min-height: 100vh;
	display: flex;
	align-items: flex-end;
	font-size: 0.75rem;
	font-weight: 500;
	padding-bottom: 0.25rem;
`

const Inner = withTheme(({ theme }) => {
	const [visible, setVisible] = useState(true)
	const { innerWidth } = useWindowSize()
	const currentBreakpoint = useCurrentBreakpoint()
	const belowSM = useMediaQuery({ below: 'sm' })
	const aboveSMBelowMD = useMediaQuery({ above: 'sm', below: 'md' })
	useEffect(toggle(setVisible), [])

	return (
		<Wrapper visible={visible}>
			<Container>
				<Grid.Row>
					{fromArray(theme.columns).map((x, i) => (
						<Grid.Column key={x} xs={i % 4 ? 0 : 4} sm={i % 2 ? 0 : 2} md={1}>
							<D>
								{x}
								{belowSM && <span> - {leftPad(i + 4)}</span>}
								{aboveSMBelowMD && <span> - {leftPad(i + 2)}</span>}
							</D>
						</Grid.Column>
					))}
				</Grid.Row>
			</Container>
			<Key>
				hold <kbd>L</kbd> to disable grid overlay
			</Key>
			<Breakpoint>
				<div>{currentBreakpoint}</div>
				<div>{innerWidth}</div>
			</Breakpoint>
		</Wrapper>
	)
})

const GridOverlay = () => {
	if (typeof document === 'undefined' || process.env.NODE_ENV === 'production')
		return null
	return <Inner />
}

export default GridOverlay
