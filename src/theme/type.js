const sans =
	'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

const serif =
	'"Tiempos Text", Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif'

const mono = 'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace'

const fonts = { sans, serif, mono }

const type = {
	fonts,
	scale: {
		// f: font-size, l: line-height, c: letter-spacing
		'0': { s: 16, l: 24, c: 0.0 },
		'1': { s: 20, l: 40, c: 0.0 },
		'2': { s: 24, l: 40, c: 0.0 },
		'3': { s: 24, l: 48, c: 0.0 },
		'4': { s: 32, l: 40, c: 0.0 },
		'5': { s: 32, l: 48, c: 0.0 },
		'6': { s: 48, l: 64, c: 0.0 },
	},
}

export default type
