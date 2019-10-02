import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const seoQuery = graphql`
	query SEOQuery {
		site {
			siteMetadata {
				title
				description
				author
				keywords
				siteUrl
			}
		}
		allImageSharp(
			filter: { original: { src: { regex: "/twittercard|opengraph/" } } }
		) {
			edges {
				node {
					resize {
						originalName
					}
					original {
						src
					}
				}
			}
		}
	}
`

const SEO = ({
	title,
	description,
	lang = 'en',
	meta = [],
	tags,
	image,
	titleTemplate,
}) => {
	const { site, allImageSharp } = useStaticQuery(seoQuery)

	const {
		twittercard: twittercardImage,
		opengraph: opengraphImage,
	} = allImageSharp.edges.reduce((acc, { node }) => {
		const name = node.resize.originalName.replace('.png', '')
		const value = node.original.src
		return { ...acc, [name]: value }
	}, {})

	const { siteUrl, author } = site.siteMetadata
	const metaDescription = description || site.siteMetadata.description
	const currentTitle = title || site.siteMetadata.title
	const defaultTitleTemplate = title
		? `${site.siteMetadata.title} | %s`
		: site.siteMetadata.title

	const metaTags = tags || site.siteMetadata.keywords

	const tagsObject =
		metaTags?.length > 0
			? { name: `keywords`, content: metaTags.join(`, `) }
			: {}

	return (
		<Helmet
			htmlAttributes={{ lang }}
			title={currentTitle}
			titleTemplate={titleTemplate || defaultTitleTemplate}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:url`,
					content: siteUrl,
				},
				{
					property: `og:site_name`,
					content: currentTitle,
				},
				{
					property: `og:title`,
					content: currentTitle,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					property: `og:image`,
					content: `${siteUrl}${image || opengraphImage}`,
				},
				{
					name: `twitter:card`,
					content: `summary_large_image`,
				},
				{
					name: `twitter:image`,
					content: `${siteUrl}${image || twittercardImage}`,
				},
				{
					name: `twitter:site`,
					content: author,
				},
				{
					name: `twitter:creator`,
					content: author,
				},
				{
					name: `twitter:title`,
					content: currentTitle,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
				tagsObject,
				...meta,
			]}
		/>
	)
}

export default SEO
