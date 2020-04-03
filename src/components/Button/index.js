import styled, { css } from 'styled-components'

import Text from '~/components/Text'
import Clickable from '~/components/Clickable'

const Button = styled(Text).attrs({ as: Clickable })`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem 1rem;
	border-radius: 0.25rem;
	cursor: pointer;
	pointer-events: all;
	&:disabled {
		pointer-events: none;
		opacity: 0.44;
	}
`

Button.defaultProps = {
	type: 'button',
	background: 'base11',
	color: 'base',
}

export default Button
