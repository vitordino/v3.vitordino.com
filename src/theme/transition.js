const defaultOptions = {
	time: 0.25,
	delay: 0.125,
}

const get = (p = [], { time, delay } = defaultOptions) => {
	if (typeof p === 'string') return `transition: ${time}s ${p} ${delay}s;`
	if (!p?.length) return null
	return `transition: ${p.map(x => `${time}s ${x} ${delay}s`).join(', ')};`
}

const transition = { get, ...defaultOptions }

export default transition
