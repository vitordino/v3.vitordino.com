import { createGlobalStyle } from 'styled-components'
import reset from 'wipe.css'
import fonts from './fonts'

const GlobalStyle = createGlobalStyle`
	${reset}
	${fonts}
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
			transition: 0.25s color 0.125s, 0.25s background-color 0.125s;
		}
		body {
			overflow-x: hidden;
		}
		::selection {
			color: ${theme.colors[theme.colors.mode][background || 'base00']};
			background: ${theme.colors[theme.colors.mode][color || 'base']};
		}
		#___gatsby{
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
