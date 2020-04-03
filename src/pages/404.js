import React from 'react'
import Layout from '~/components/Layout'
import NavBar from '~/components/NavBar'
import Container from '~/components/Container'
import Link from '~/components/Link'

const NotFoundPage = () => (
	<Layout title='404: Not found'>
		<NavBar />
		<Container>
			<h1>NOT FOUND</h1>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
			<Link to='/'>home</Link>
		</Container>
	</Layout>
)

export default NotFoundPage
