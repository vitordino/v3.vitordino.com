import { mix } from 'polished'

const base = {
	light: '#0A0B0E',
	dark: '#FFFFFF',
}

const colors = {
	light: {
		base: base.light,
		base88: mix(0.88, base.light, base.dark),
		base66: mix(0.66, base.light, base.dark),
		base44: mix(0.44, base.light, base.dark),
		base22: mix(0.22, base.light, base.dark),
		base11: mix(0.11, base.light, base.dark),
		base06: mix(0.6, base.light, base.dark),
		base03: mix(0.3, base.light, base.dark),
		base00: mix(0.0, base.light, base.dark),
	},
	dark: {
		base: base.dark,
		base88: mix(0.88, base.dark, base.light),
		base66: mix(0.66, base.dark, base.light),
		base44: mix(0.44, base.dark, base.light),
		base22: mix(0.22, base.dark, base.light),
		base11: mix(0.11, base.dark, base.light),
		base06: mix(0.6, base.dark, base.light),
		base03: mix(0.3, base.dark, base.light),
		base00: mix(0.0, base.dark, base.light),
	},
}

export default colors
