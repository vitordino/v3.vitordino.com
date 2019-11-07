import React from 'react'
import Etymos from './Etymos'

const canvasComponents = {
	etymos: p => <Etymos {...p} />,
}

const Canvas = ({ canvas, ...props }) => {
	const Component = canvasComponents?.[canvas]
	if (!Component) return null
	return <Component {...props} />
}

export default Canvas
