import { createGlobalStyle, css } from 'styled-components'
import reset from 'wipe.css'
import tiempos from '@/assets/fonts/tiempos-text'
import 'typeface-ibm-plex-mono'

const GlobalStyle = createGlobalStyle`
	${reset}
	${tiempos}

	html, body {
		text-rendering: optimizeLegibility;
		font-smooth: antialised;
		font-smoothing: antialised;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1, 'pnum' 0, 'tnum' 1, 'onum' 0, 'lnum' 1, 'dlig' 1, 'zero' 1, 'case' 1;
		height: auto;
		min-height: 100vh;
		background: var(--color-base00);
		color: var(--color-base);
	}
	::selection {
		background: var(--color-base);
		color: var(--color-base00);
	}
	body {
		overflow-x: hidden;
	}
	#___gatsby {
		${process.env.NODE_ENV === 'development' && 'color: red;'}
		min-height: 100%;
		display: flex;
		flex-direction: column;
	}
	button {
		color: inherit;
	}
	${({ theme }) => css`
		:root, [data-theme='light'] {
			--color-base: ${theme.colors.light.base};
			--color-base88: ${theme.colors.light.base88};
			--color-base66: ${theme.colors.light.base66};
			--color-base44: ${theme.colors.light.base44};
			--color-base22: ${theme.colors.light.base22};
			--color-base11: ${theme.colors.light.base11};
			--color-base06: ${theme.colors.light.base06};
			--color-base03: ${theme.colors.light.base03};
			--color-base00: ${theme.colors.light.base00};
		}
		[data-theme='dark'] {
			--color-base: ${theme.colors.dark.base};
			--color-base88: ${theme.colors.dark.base88};
			--color-base66: ${theme.colors.dark.base66};
			--color-base44: ${theme.colors.dark.base44};
			--color-base22: ${theme.colors.dark.base22};
			--color-base11: ${theme.colors.dark.base11};
			--color-base06: ${theme.colors.dark.base06};
			--color-base03: ${theme.colors.dark.base03};
			--color-base00: ${theme.colors.dark.base00};
		}
		html, body {
			font-family: ${theme.type.fonts.serif};
			${theme.transition.get()};
		}
		pre, code {
			font-family ${theme.type.fonts.mono};
		}
	`}
`

export default GlobalStyle
