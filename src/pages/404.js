import React from 'react'
import Layout from '~/components/Layout'
import NavBar from '~/components/NavBar'
import Container from '~/components/Container'
import Text from '~/components/Text'

const NotFoundPage = () => (
	<Layout title='404: Not found'>
		<NavBar />
		<Text
			as='h1'
			style={{
				fontSize: '50vw',
				textAlign: 'center',
				lineHeight: 1,
				letterSpacing: '-1vw',
			}}
			color='base06'
			weight={300}
			family='sans'
		>
			404
		</Text>
	</Layout>
)

export default NotFoundPage
