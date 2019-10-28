const path = require('path')
const locales = require('../content/i18n')
const { findKey } = require('./helpers')

module.exports = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const name = path.basename(node.fileAbsolutePath, '.mdx')
    const isDefault = name === 'index'
    const defaultKey = findKey(locales, o => o.default === true)
    const lang = isDefault ? defaultKey : name.split('.')[1]
    createNodeField({ node, name: 'locale', value: lang })
    createNodeField({ node, name: 'isDefault', value: isDefault })
  }
}
