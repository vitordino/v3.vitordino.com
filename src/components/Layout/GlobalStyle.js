import { createGlobalStyle } from 'styled-components'
import reset from 'wipe.css'
import tiempos from '@/assets/fonts/tiempos-text'

const GlobalStyle = createGlobalStyle`
	${reset}
	${tiempos}
	${({ background, color, theme }) => `
		html, body {
			font-family: ${theme.type.fonts.serif};
			background: ${theme.colors[theme.colors.mode][background || 'base00']};
			color: ${theme.colors[theme.colors.mode][color || 'base']};
			text-rendering: optimizeLegibility;
			font-smooth: antialised;
			font-smoothing: antialised;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			-webkit-font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1, 'pnum' 0, 'tnum' 1, 'onum' 0, 'lnum' 1, 'dlig' 1, 'zero' 1, 'case' 1;
			height: auto;
			min-height: 100vh;
			${theme.transition.get()}
		}
		body {
			overflow-x: hidden;
		}
		::selection {
			color: ${theme.colors[theme.colors.mode][background || 'base00']};
			background: ${theme.colors[theme.colors.mode][color || 'base']};
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
	`}
`

export default GlobalStyle
