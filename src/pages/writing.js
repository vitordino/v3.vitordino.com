import React from 'react'
import { graphql } from 'gatsby'
import flattenEdges from '~/utils/flattenEdges'
import useTranslations from '~/hooks/useTranslations'
import Layout from '~/components/Layout'
import Container from '~/components/Container'
import NavBar from '~/components/NavBar'
import Spacer from '~/components/Spacer'
import Text from '~/components/Text'
import SeparatorSection from '~/components/SeparatorSection'

const HomePage = ({ data, ...props }) => {
	const { paths, homepage } = useTranslations()
	const { writing, experience } = data

	const writingItems = flattenEdges(writing).map(({ frontmatter }) => ({
		title: frontmatter.title,
		description: frontmatter.description,
		right: frontmatter.date,
		to: `/${paths.writing}/${frontmatter.slug}`,
	}))

	return (
		<Layout>
			<NavBar />
			<Container style={{ marginTop: -1 }}>
				<SeparatorSection title={homepage.writingTitle} items={writingItems} />
			</Container>
		</Layout>
	)
}

export default HomePage

export const query = graphql`
	query WritingPage($locale: String!, $dateFormat: String!) {
		writing: allMdx(
			filter: {
				fields: { locale: { eq: $locale } }
				fileAbsolutePath: { regex: "/writing/" }
			}
			sort: { fields: [fileAbsolutePath], order: DESC }
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
