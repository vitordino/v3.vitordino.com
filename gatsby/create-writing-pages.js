/* eslint-env node */
const path = require('path')
const { createQuery, getLocalizedPath, replaceBoth } = require('./helpers')
const locales = require(`../content/i18n`)
const translations = require(`../content/translations`)
const component = require.resolve('../src/templates/post.js')

const query = createQuery('CreateWritingPages')`
	writing: allFile(filter: {
		sourceInstanceName: { eq: "writing" }
		extension: { eq: "mdx" }
	}) {
		edges {
			node {
				childMdx {
					fields {
						locale
						isDefault
					}
					frontmatter {
						title
						slug
					}
				}
			}
		}
	}
`

module.exports = async ({ graphql, actions: { createPage, deletePage } }) => {
	const { writing: { edges } } = await query(graphql)

	edges.forEach(({ node: post }) => {
		const title = post.childMdx.frontmatter.title
		const locale = post.childMdx.fields.locale
		const slug = post.childMdx.frontmatter.slug
		const relativeSlug = replaceBoth(`${translations[locale].paths.writing}/${slug}`)
		const isDefault = post.childMdx.fields.isDefault
		const path = getLocalizedPath(locale, relativeSlug)

		try { deletePage(path) } catch (e) { }

		createPage({ path, component, context: { locale, title, slug } })
	})
}
