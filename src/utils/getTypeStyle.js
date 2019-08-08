const getTypeStyle = name => ({ theme }) => {
	const { fontSize, lineHeight, letterSpacing } = theme.type.scale[name]
	return [
		fontSize && `font-size: ${fontSize}px`,
		lineHeight && `line-height: ${lineHeight}px`,
		letterSpacing && `letter-spacing: ${letterSpacing}px`,
	]
		.filter(x => !!x)
		.join(';\n')
}

export default getTypeStyle
