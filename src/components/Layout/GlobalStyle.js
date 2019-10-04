import { createGlobalStyle } from 'styled-components'
import reset from 'wipe.css'

const GlobalStyle = createGlobalStyle`
	${reset}
	${({ background, color, theme }) => `
		html, body {
			font-family: ${theme.type.fonts.sans};
			background: ${theme.colors[theme.colors.mode][background || 'white']};
			color: ${theme.colors[theme.colors.mode][color || 'black']};
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
		::selection {
			color: ${theme.colors[theme.colors.mode][background || 'white']};
			background: ${theme.colors[theme.colors.mode][color || 'black']};
		}
		#__gatsby{
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
