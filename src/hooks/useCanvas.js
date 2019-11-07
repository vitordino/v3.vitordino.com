import { useRef, useEffect } from 'react'

const useCanvas = (draw, context = '2d', deps = []) => {
	const canvasRef = useRef(null)

	useEffect(() => {
		const ctx = canvasRef?.current?.getContext(context)
		if (!ctx) return null
		let animationFrameId = requestAnimationFrame(renderFrame)

		function renderFrame() {
			animationFrameId = requestAnimationFrame(renderFrame)
			draw(ctx)
		}

		return () => cancelAnimationFrame(animationFrameId)
	}, [context, draw])

	return canvasRef
}

export default useCanvas
