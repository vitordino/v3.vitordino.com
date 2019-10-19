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
		default: { fontSize: 16, lineHeight: 24, letterSpacing: 0.0 },
	},
}

export default type
