import { css } from 'styled-components'

import TiemposRegularWOFF from './TiemposText-Regular.woff'
import TiemposRegularTTF from './TiemposText-Regular.ttf'

import TiemposRegularItalicWOFF from './TiemposText-RegularItalic.woff'
import TiemposRegularItalicTTF from './TiemposText-RegularItalic.ttf'

import TiemposSemiboldWOFF from './TiemposText-Semibold.woff'
import TiemposSemiboldTTF from './TiemposText-Semibold.ttf'

import TiemposSemiboldItalicWOFF from './TiemposText-SemiboldItalic.woff'
import TiemposSemiboldItalicTTF from './TiemposText-SemiboldItalic.ttf'

export default css`
	@font-face {
		font-family: 'Tiempos Text';
		src: url(${TiemposRegularWOFF}) format('woff'),
			url(${TiemposRegularTTF}) format('truetype');
		font-style: normal;
		font-weight: 400;
	}

	@font-face {
		font-family: 'Tiempos Text';
		src: url(${TiemposRegularItalicWOFF}) format('woff'),
			url(${TiemposRegularItalicTTF}) format('truetype');
		font-style: italic;
		font-weight: 400;
	}

	@font-face {
		font-family: 'Tiempos Text';
		src: url(${TiemposSemiboldWOFF}) format('woff'),
			url(${TiemposSemiboldTTF}) format('truetype');
		font-style: normal;
		font-weight: 500;
	}

	@font-face {
		font-family: 'Tiempos Text';
		src: url(${TiemposSemiboldItalicWOFF}) format('woff'),
			url(${TiemposSemiboldItalicTTF}) format('truetype');
		font-style: italic;
		font-weight: 500;
	}
`
