import React, { useRef } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

import useCanvas from '~/hooks/useCanvas'
import { useMeasure, useMouse } from 'react-use'

const range = n => [...Array(n)].map((_, i) => i)

const Wrapper = styled.div`
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	opacity: ${p => (p.visible ? 1 : 0)} ;
	transition: 0.3s opacity;
	margin-top: 1px;
`

const Inner = styled.div`
	width: 100%;
	height: 100%;
`

const Main = styled.canvas`
	width: 100%;
	height: 100%;
`

const circle = ({ ctx, size, fill, stroke, strokeWidth, x, y }) => {
	if (!ctx) return
	ctx.beginPath()
	ctx.arc(x, y, size, 0, 2 * Math.PI)
	if (fill) {
		ctx.fillStyle = fill
		ctx.fill()
	}
	if (stroke && strokeWidth) {
		ctx.strokeStyle = stroke
		ctx.lineWidth = strokeWidth
		ctx.stroke()
	}
}

const grid = ({
	ctx,
	size = 1,
	width,
	height,
	color = '#2C2C2C',
	space = 24,
	padding = 1,
}) => {
	const c = range(Math.floor(width / space) - padding)
	const l = range(Math.floor(height / space) - padding)

	const arr = c.flatMap(i =>
		l.map(j => ({
			x: (i + padding) * space,
			y: (j + padding) * space,
		})),
	)

	arr.forEach(({ x, y }) => circle({ ctx, size, fill: color, x, y }))
}

const ripples = ({ ctx, size, width, height, mouseX, mouseY, count }) =>
	range(count).forEach(n => {
		circle({
			ctx,
			size: size * (n + 1),
			x: mouseX + size * n - n * size * (mouseX / (width / 2)),
			y: mouseY + size * n - n * size * (mouseY / (height / 2)),
			stroke: '#1D7969',
			strokeWidth: 1,
		})
	})

const draw = ({ width = 0, height = 0, mouseX = 0, mouseY = 0 }) => ctx => {
	ctx.clearRect(0, 0, width, height)
	grid({ ctx, width, height })
	ripples({ ctx, width, height, mouseX, mouseY, size: 24, count: 24 })
}

const Outer = ({ children }) => {
	const mouseRef = useRef()
	const [inViewRef, inView] = useInView()
	const [ref, { width, height }] = useMeasure()
	const { elX: mouseX, elY: mouseY } = useMouse(mouseRef)
	const noRender = typeof window === 'undefined' || !width || !height

	return (
		<div ref={mouseRef}>
			<Wrapper ref={ref} visible={!noRender}>
				<Inner ref={inViewRef}>
					{inView ? children({ width, height, mouseX, mouseY }) : null}
				</Inner>
			</Wrapper>
		</div>
	)
}

const Canvas = ({ width, height, mouseX, mouseY }) => {
	const canvasRef = useCanvas(draw({ width, height, mouseX, mouseY }))
	return <Main width={width} height={height} ref={canvasRef} />
}

const Etymos = () => <Outer>{p => <Canvas {...p} />}</Outer>

export default Etymos
