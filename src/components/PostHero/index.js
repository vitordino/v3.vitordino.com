import React from 'react'
import styled from 'styled-components'
import Canvas from '@/components/Canvas'
import Container from '@/components/Container'

const Wrapper = styled.div`
	position: relative;
`

const Content = styled(Container)`
	position: relative;
`

const PostHero = ({ title, description, tags, canvas, ...children }) => (
	<Wrapper>
		<Canvas canvas={canvas} />
		<Content>
			<pre>{JSON.stringify({ title, description, tags, canvas }, null, 2)}</pre>
		</Content>
	</Wrapper>
)

export default PostHero
