import Etymos from './Etymos'

const components = {
	etymos: Etymos,
}

const Canvas = ({ canvas, ...p }) => components?.[canvas]?.(p) || null

export default Canvas
