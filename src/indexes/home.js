import React from 'react'
import { graphql } from 'gatsby'

import extractMeta from '@/utils/extractMeta'
import useLocale from '@/store/locale'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import NavBar from '@/components/NavBar'

const HomePage = ({ data, ...props }) => {
	const x = useLocale()
	const content = data?.content?.data

	return (
		<Layout {...extractMeta(content)}>
			<NavBar />
			<Container>
				<pre>{JSON.stringify({ x, props, content }, null, 2)}</pre>
			</Container>
		</Layout>
	)
}

export const pageQuery = graphql`
	query HomePage($locale: String) {
		content: prismicHome(lang: { eq: $locale }) {
			lang
			data {
				meta_title
				meta_description
			}
		}
	}
`

export default HomePage
