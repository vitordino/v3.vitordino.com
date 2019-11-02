import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '@/components/Layout'
import NavBar from '@/components/NavBar'
import Container from '@/components/Container'
import Link from '@/components/Link'

const components = { a: Link }

const Post = ({ data: { mdx } }) => (
	<Layout background='base11' color='base88'>
		<NavBar />
		<Container>
			<h1>{mdx.frontmatter.title}</h1>
			<MDXRenderer components={components}>{mdx.body}</MDXRenderer>
		</Container>
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
			}
			body
		}
	}
`
