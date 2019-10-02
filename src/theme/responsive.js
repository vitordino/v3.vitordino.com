const columns = 16

const breakpoints = {
	xs: { width: 0, gutter: 16 },
	sm: { width: 576, gutter: 24 },
	md: { width: 768, gutter: 32 },
	lg: { width: 992, gutter: 32 },
	xg: { width: 1280, gutter: 32 },
}

const grid = { columns, breakpoints }

export default grid
