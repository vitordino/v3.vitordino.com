import styled from 'styled-components'
import { mapBreakpoints } from 'etymos'

import getTypeStyle from '@/utils/getTypeStyle'

const Text = styled.div`
  ${p => p.color && `color: ${p.theme.getColor(p.color)(p)};`}
  ${p => p.weight && `font-weight: ${p.weight};`}
  ${p => p.case && `text-transform: ${p.case};`}
  ${({ theme }) => theme.transition.get()};
	${mapBreakpoints(value => getTypeStyle(value))}
`

Text.defaultProps = { xs: 0 }

export default Text
