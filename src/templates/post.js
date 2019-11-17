import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '@/components/Layout'
import NavBar from '@/components/NavBar'
import Link from '@/components/Link'
import PostHero from '@/components/PostHero'

const components = { a: Link }

const Post = ({ data: { mdx } }) => (
	<Layout {...mdx.frontmatter}>
		<NavBar />
		<PostHero {...mdx.frontmatter} {...mdx.frontmatter.hero} />
		<MDXRenderer components={components}>{mdx.body}</MDXRenderer>
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
			}
			body
		}
	}
`
