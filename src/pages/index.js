import React from 'react'
import { graphql } from 'gatsby'
import flattenEdges from '@/utils/flattenEdges'
import useTranslations from '@/hooks/useTranslations'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import NavBar from '@/components/NavBar'
import Spacer from '@/components/Spacer'
import Text from '@/components/Text'
import SeparatorSection from '@/components/SeparatorSection'

const HomePage = ({ data, ...props }) => {
	const { paths, homepage } = useTranslations()
	const { writing, experience } = data

	const writingItems = flattenEdges(writing).map(({ frontmatter }) => ({
		title: frontmatter.title,
		description: frontmatter.description,
		right: frontmatter.date,
		to: `/${paths.writing}/${frontmatter.slug}`,
	}))

	const experienceItems = flattenEdges(experience).map(({ frontmatter }) => ({
		title: frontmatter.title,
		description: frontmatter.description,
		right: frontmatter.dateRange,
		to: frontmatter.to,
	}))

	return (
		<Layout>
			<NavBar />
			<Container>
				<Spacer.V xs={6} />
				<Text
					xs={4}
					md={6}
					style={{ maxWidth: '7.25em', textTransform: 'lowercase' }}
					color='base'
				>
					{homepage?.heroTitle}
				</Text>
				<Spacer.V xs={8} />
				<SeparatorSection title={homepage?.writingTitle} items={writingItems} />
				<SeparatorSection
					title={homepage?.experienceTitle}
					items={experienceItems}
				/>
			</Container>
		</Layout>
	)
}

export default HomePage

export const query = graphql`
	query HomePage($locale: String!, $dateFormat: String!) {
		writing: allMdx(
			filter: {
				fields: { locale: { eq: $locale } }
				fileAbsolutePath: { regex: "/writing/" }
			}
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
		experience: allMdx(
			filter: {
				fields: { locale: { eq: $locale } }
				fileAbsolutePath: { regex: "/experience/" }
			}
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					frontmatter {
						title
						dateRange
						to
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
