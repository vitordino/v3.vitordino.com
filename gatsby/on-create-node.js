/* eslint-env node */
const path = require('path')
const locales = require('../content/i18n')

const defaultLocale = Object.entries(locales).find(([_, v]) => !!v.default)[0]

module.exports = ({ node, actions }) => {
	if (node.internal.type === 'Mdx') {
		const name = path.basename(node.fileAbsolutePath, '.mdx')
		const isDefaultLocale = name === 'index'
		const locale = isDefaultLocale ? defaultLocale : name.split('.')[1]
		actions.createNodeField({ node, name: 'locale', value: locale })
	}
}
