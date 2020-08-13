import React from 'react'
import styled from 'styled-components'
import Slugger from 'github-slugger'

import Text from '~/components/Text'
import Clickable from '~/components/Clickable'

const Wrapper = styled.ol`
	li {
		list-style: decimal-leading-zero;
		margin-bottom: 1.25em;
		color: var(--color-base44);
		list-style-position: inside;
		${p => p.theme.above('md')`
			list-style-position: outside;
		`}
	}
	a {
		display: block;
	}
	& ${Text} {
		max-width: 32em;
		transition: none;
		text-decoration: underline;
		text-decoration-color: var(--color-base22);
		&:hover {
			color: var(--color-base88);
		}
	}
`

const TableOfContents = ({ headings }) => {
	const slugger = new Slugger()
	return (
		<Wrapper>
			{headings.map(({ value }, i) => (
				<li>
					<Clickable to={`#${slugger.slug(value)}`}>
						<Text color='base66'>{value}</Text>
					</Clickable>
				</li>
			))}
		</Wrapper>
	)
}

export default TableOfContents
