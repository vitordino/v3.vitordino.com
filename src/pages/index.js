import React from 'react'
import { graphql } from 'gatsby'
import useTranslations from '@/hooks/useTranslations'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import NavBar from '@/components/NavBar'
import Spacer from '@/components/Spacer'
import Text from '@/components/Text'
import Link from '@/components/Link'

const HomePage = ({ data, ...props }) => {
	const { paths, homepage } = useTranslations()
	const { writing } = data
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
				<ul>
					{writing.edges.map(({ node: post }) => (
						<li key={`${post.frontmatter.title}-${post.fields.locale}`}>
							<Link to={`/${paths.writing}/${post.frontmatter.slug}`}>
								{post.frontmatter.title}
							</Link>
							<div>{post.frontmatter.date}</div>
						</li>
					))}
				</ul>
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
					}
					fields {
						locale
					}
				}
			}
		}
	}
`
