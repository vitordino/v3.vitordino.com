import React from 'react'
import styled from 'styled-components'
import Text from '~/components/Text'
import Clickable from '~/components/Clickable'
import Spacer from '~/components/Spacer'

const Wrapper = styled(Clickable)`
	margin-bottom: 4rem;
	display: block;
`

const Top = styled.div`
	display: flex;
	justify-content: space-between;
`

const SeparatorSectionItem = ({ to, title, description, right, ...props }) => (
	<Wrapper {...props} to={to}>
		<Top>
			{title && (
				<Text color='base88' weight={500}>
					{title}
				</Text>
			)}
			{right && <Text color='base22'>{right}</Text>}
		</Top>
		{description && <Spacer.V xs={0.5} />}
		{description && <Text color='base44'>{description}</Text>}
	</Wrapper>
)

export default SeparatorSectionItem
