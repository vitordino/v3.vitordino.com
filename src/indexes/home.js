import React from 'react'
import { graphql } from 'gatsby'

import extractMeta from '@/utils/extractMeta'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import NavBar from '@/components/NavBar'
import Spacer from '@/components/Spacer'
import Text from '@/components/Text'

const HomePage = ({ data, ...props }) => {
	const content = data?.content?.data || {}
	return (
		<Layout {...extractMeta(content)}>
			<NavBar />
			<Container>
				<Spacer.V xs={6} />
				<Text xs={4} md={6} style={{ maxWidth: '7em' }}>
					{content.hero_title}
				</Text>
				<Spacer.V xs={8} />
				<pre>{JSON.stringify({ props, content }, null, 2)}</pre>
			</Container>
		</Layout>
	)
}

// export const pageQuery = graphql`
// 	query HomePage($locale: String) {
// 		content: prismicHome(lang: { eq: $locale }) {
// 			lang
// 			data {
// 				meta_title
// 				meta_description
// 				hero_title
// 			}
// 		}
// 		posts: allPrismicPost(filter: { lang: { eq: $locale } }) {
// 			edges {
// 				node {
// 					first_publication_date
// 					data {
// 						meta_title
// 						meta_description
// 					}
// 				}
// 			}
// 		}
// 	}
// `

export default HomePage
