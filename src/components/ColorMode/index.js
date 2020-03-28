import { Children, cloneElement } from 'react'

const ColorMode = ({ mode, children }) => {
	if (!mode) return children
	return Children.map(children, c => cloneElement(c, { 'data-theme': mode }))
}

export default ColorMode
