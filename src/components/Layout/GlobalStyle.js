import { createGlobalStyle } from 'styled-components'
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
	${p => `
		html, body {
			font-family: ${p.theme.type.fonts.serif};
			background: ${p.theme.colors.get('base00')(p)};
			color: ${p.theme.colors.get('base')(p)};
			${p.theme.transition.get()}
		}
		::selection {
			background: ${p.theme.colors.get('base')(p)};
			color: ${p.theme.colors.get('base00')(p)};
		}
		pre, code {
			font-family ${p.theme.type.fonts.mono};
		}
	`}
`

export default GlobalStyle
