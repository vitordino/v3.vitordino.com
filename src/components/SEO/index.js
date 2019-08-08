import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({
	description,
	lang = 'en',
	meta = [],
	keywords = [],
	title,
	image,
	titleTemplate,
}) => {
	const { site, allImageSharp } = useStaticQuery(
		graphql`
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
		`,
	)

	const {
		twittercard: twittercardImage,
		opengraph: opengraphImage,
	} = allImageSharp.edges.reduce((prev, { node }) => {
		const name = node.resize.originalName.replace('.png', '')
		const value = node.original.src

		return { ...prev, [name]: value }
	}, {})

	const { siteUrl, author } = site.siteMetadata
	const metaDescription = description || site.siteMetadata.description
	const currentTitle = title || site.siteMetadata.title
	const defaultTitleTemplate = title
		? `${site.siteMetadata.title} | %s`
		: site.siteMetadata.title

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
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
				// { rel: 'dns-prefetch', href: 'https://client.relay.crisp.chat' },
			]

				.concat(
					keywords.length > 0
						? {
								name: `keywords`,
								content: keywords.join(`, `),
						  }
						: [],
				)
				.concat(meta)}
		/>
	)
}

export default SEO
