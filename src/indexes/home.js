import React from 'react'
import { graphql } from 'gatsby'

import extractMeta from '@/utils/extractMeta'
import Layout from '@/components/Layout'

const HomePage = ({ data }) => {
	const content = data?.content?.data
	return (
		<Layout {...extractMeta(content)}>
			<pre>{JSON.stringify(content, null, 2)}</pre>
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
