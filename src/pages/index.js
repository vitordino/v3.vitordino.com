import React from 'react'
import { graphql } from 'gatsby'
import flattenEdges from '@/utils/flattenEdges'
import useTranslations from '@/hooks/useTranslations'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import NavBar from '@/components/NavBar'
import Spacer from '@/components/Spacer'
import Text from '@/components/Text'
import Link from '@/components/Link'
import SeparatorSection from '@/components/SeparatorSection'
import Grid from '@/components/Grid'

const HomePage = ({ data, ...props }) => {
	const { paths, homepage } = useTranslations()
	const { writing } = data

	const postItems = flattenEdges(writing).map(({ frontmatter }) => ({
		title: frontmatter.title,
		description: frontmatter.description,
		right: frontmatter.date,
		to: `/${paths.writing}/${frontmatter.slug}`,
	}))

	return (
		<Layout>
			<NavBar />
			<Container>
				<Spacer.V xs={6} />
				<Text
					xs={4}
					md={6}
					style={{ maxWidth: '7em', textTransform: 'lowercase' }}
				>
					{homepage?.heroTitle}
				</Text>
				<Spacer.V xs={8} />
				<SeparatorSection title='writing' items={postItems} />
			</Container>
		</Layout>
	)
}

export default HomePage

export const query = graphql`
	query HomePage($locale: String!, $dateFormat: String!) {
		writing: allMdx(
			filter: { fields: { locale: { eq: $locale } } }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					frontmatter {
						title
						date(formatString: $dateFormat)
						slug
						description
					}
					fields {
						locale
					}
				}
			}
		}
	}
`
