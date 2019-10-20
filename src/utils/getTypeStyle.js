const getTypeStyle = name => ({ theme }) => {
	const { s, l, c } = theme.type.scale[name]
	return [
		s && `font-size: ${s}px`,
		l && `line-height: ${l}px`,
		c && `letter-spacing: ${c}px`,
	]
		.filter(x => !!x)
		.join(';\n')
}

export default getTypeStyle
