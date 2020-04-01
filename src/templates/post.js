import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '@/components/Layout'
import NavBar from '@/components/NavBar'
import Text from '@/components/Text'
import Link from '@/components/Link'
import PostHero from '@/components/PostHero'
import CodeBlock from '@/components/CodeBlock'

const MDXLink = ({ href, ...props }) => <Link {...props} to={href} />
const H2 = p => <Text xs={3} md={5} {...p} />

const components = {
	a: MDXLink,
	pre: CodeBlock,
	h2: H2,
}

const getMeta = ({ frontmatter }) => ({
	...frontmatter,
	ogImage: frontmatter.ogImage.url,
	twitterImage: frontmatter.twitterImage.url,
})

const Post = ({ data: { mdx } }) => (
	<Layout {...getMeta(mdx)}>
		<NavBar />
		<PostHero {...mdx.frontmatter} {...mdx.frontmatter.hero} />
		<MDXProvider components={components}>
			<MDXRenderer>{mdx.body}</MDXRenderer>
		</MDXProvider>
	</Layout>
)

export default Post

export const query = graphql`
	query Post($locale: String!, $slug: String!) {
		mdx(
			frontmatter: { slug: { eq: $slug } }
			fields: { locale: { eq: $locale } }
			fileAbsolutePath: { regex: "/writing/" }
		) {
			frontmatter {
				title
				description
				tags
				hero {
					canvas
				}
				ogImage {
					url: publicURL
				}
				twitterImage {
					url: publicURL
				}
			}
			body
		}
	}
`
