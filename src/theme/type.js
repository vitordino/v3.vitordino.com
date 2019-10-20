const sansStack =
	'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

const serifStack =
	'"Tiempos Text", Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif'

const fonts = {
	sans: sansStack,
	serif: serifStack,
}

const type = {
	fonts,
	scale: {
		// f: font-size, l: line-height, c: letter-spacing
		'0': { f: 16, l: 24, c: 0.0 },
		'1': { f: 20, l: 40, c: 0.0 },
		'2': { f: 24, l: 40, c: 0.0 },
		'3': { f: 24, l: 48, c: 0.0 },
		'4': { f: 32, l: 40, c: 0.0 },
		'5': { f: 32, l: 48, c: 0.0 },
		'6': { f: 48, l: 64, c: 0.0 },
	},
}

export default type
