import React from 'react'
import { graphql } from 'gatsby'
import Link from '@/components/Link'
import useTranslations from '@/hooks/useTranslations'

const Index = ({ data: { allMdx } }) => {
	// useTranslations is aware of the global context (and therefore also 'locale')
	// so it'll automatically give back the right translations
	const { hello, subline, paths } = useTranslations()

	return (
		<>
			<h1>{hello}</h1>
			<p>{subline}</p>
			<hr style={{ margin: `2rem 0` }} />
			<ul className='post-list'>
				{allMdx.edges.map(({ node: post }) => (
					<li key={`${post.frontmatter.title}-${post.fields.locale}`}>
						<Link to={`${paths.writing}/${post.frontmatter.slug}`}>
							{post.frontmatter.title}
						</Link>
						<div>{post.frontmatter.date}</div>
					</li>
				))}
			</ul>
		</>
	)
}

export default Index

export const query = graphql`
	query Index($locale: String!, $dateFormat: String!) {
		allMdx(
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
