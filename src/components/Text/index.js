import styled from 'styled-components'
import { mapBreakpoints } from 'etymos'

const getStyle = ({ fontSize, lineHeight, letterSpacing }) =>
	[
		fontSize && `font-size: ${fontSize}px`,
		lineHeight && `line-height: ${lineHeight}px`,
		letterSpacing && `letter-spacing: ${letterSpacing}`,
	]
		.filter(x => x)
		.join(';\n')

const Text = styled.p`
  ${p => p.color && `color: ${p.theme.colors.light?.[p.color] || 'red'};`}
  ${p => p.weight && `font-weight: ${p.weight};`}
  ${p => p.uppercase && `text-transform: uppercase;`}
	${mapBreakpoints((value, props) => getStyle(props.theme.type.scale[value]))}
`

Text.defaultProps = { xs: 0 }

export default Text
