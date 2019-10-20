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
		'0': { fontSize: 16, lineHeight: 24, letterSpacing: 0.0 },
		'1': { fontSize: 20, lineHeight: 40, letterSpacing: 0.0 },
		'2': { fontSize: 24, lineHeight: 40, letterSpacing: 0.0 },
		'3': { fontSize: 24, lineHeight: 48, letterSpacing: 0.0 },
		'4': { fontSize: 32, lineHeight: 40, letterSpacing: 0.0 },
		'5': { fontSize: 32, lineHeight: 48, letterSpacing: 0.0 },
		'6': { fontSize: 48, lineHeight: 64, letterSpacing: 0.0 },
	},
}

export default type
