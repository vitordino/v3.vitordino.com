const getLocale = s => {
	if (typeof s !== 'string') return s
	return s
		.split('-')
		.map((x, i) => (i === 1 ? x.toUpperCase() : x))
		.join('-')
}

export default getLocale
