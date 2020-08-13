import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '~/components/Layout'
import NavBar from '~/components/NavBar'
import Text from '~/components/Text'
import Clickable from '~/components/Clickable'
import PostHero from '~/components/PostHero'
import Container from '~/components/Container'
import Grid from '~/components/Grid'
import TableOfContents from '~/components/TableOfContents'
import CodeBlock from '~/components/CodeBlock'
import Utterances from '~/components/Utterances'
import Spacer from '~/components/Spacer'

const MDXLink = ({ href, ...props }) => <Clickable {...props} to={href} />
const H2 = p => <Text as='h2' xs={3} md={5} {...p} />

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

const Post = ({ data: { mdx }, pageContext }) => (
	<Layout {...getMeta(mdx)}>
		<NavBar />
		<PostHero {...mdx.frontmatter} {...mdx.frontmatter.hero} />
		<MDXProvider components={components}>
			<Container>
				<Spacer.V xs={8} />
				<Grid.Row>
					<Grid.Column xs={0} lg={1} xg={2} />
					<Grid.Column xs={16} lg={12} xg={10}>
						<TableOfContents headings={mdx.headings} />
					</Grid.Column>
				</Grid.Row>
				<Spacer.V xs={2} />
			</Container>
			<MDXRenderer>{mdx.body}</MDXRenderer>
		</MDXProvider>
		<Utterances uid={`[${pageContext.locale}] ${pageContext.slug}`} />
		<Spacer.V xs={4} />
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
			headings {
				depth
				value
			}
		}
	}
`
