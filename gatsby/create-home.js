/* eslint-env node */
const path = require('path')
const { createQuery, getLocalizedPath } = require('./helpers')

const query = createQuery('Home')`
  content: allPrismicHome {
    edges {
      node {
        locale: lang
      }
    }
  }
`

module.exports = async ({ graphql, actions: { createPage, deletePage } }) => {
	const {
		content: { edges },
	} = await query(graphql)

	edges.forEach(({ node }) => {
		const { locale } = node
		try {
			deletePage(getLocalizedPath(locale, ''))
		} catch (e) {
			/* swallow errors */
		}

		createPage({
			path: getLocalizedPath(locale, ''),
			component: path.resolve(`src/indexes/home.js`),
			context: { locale },
		})
	})
}
