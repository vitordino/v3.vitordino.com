import styled from 'styled-components'
import { mapBreakpoints } from 'etymos'

import getTypeStyle from '@/utils/getTypeStyle'

const Text = styled.p`
  ${p => p.color && `color: ${p.theme.colors.light?.[p.color] || 'red'};`}
  ${p => p.weight && `font-weight: ${p.weight};`}
  ${p => p.uppercase && `text-transform: uppercase;`}
	${mapBreakpoints(value => getTypeStyle(value))}
`

Text.defaultProps = { xs: 0 }

export default Text
