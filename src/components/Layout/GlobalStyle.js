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
	${({ background, color, theme, ...p }) => `
		html, body {
			font-family: ${theme.type.fonts.serif};
			background: ${theme.colors.get('base00')({ theme, ...p })};
			color: ${theme.colors.get('base')({ theme, ...p })};
			${theme.transition.get()}
		}
		::selection {
			background: ${theme.colors.get('base')({ theme, ...p })};
			color: ${theme.colors.get('base00')({ theme, ...p })};
		}
		pre, code {
			font-family ${theme.type.fonts.mono};
		}
	`}
`

export default GlobalStyle
