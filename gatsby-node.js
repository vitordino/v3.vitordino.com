const path = require(`path`)
const locales = require(`./content/i18n`)
const translations = require(`./content/translations`)

const {
  localizedSlug,
  findKey,
  removeTrailingSlash,
} = require(`./gatsby/helpers`)

const onCreateNode = require('./gatsby/on-create-node')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  Object.keys(locales).map(lang => {
    const localizedPath = locales[lang].default
      ? page.path
      : `${locales[lang].path}${page.path}`
    return createPage({
      ...page,
      path: removeTrailingSlash(localizedPath),
      context: {
        ...page.context,
        locale: lang,
        dateFormat: locales[lang].dateFormat,
      },
    })
  })
}

exports.onCreateNode = onCreateNode

exports.createPages = async (...args) => {
  await Promise.all([
		require('./gatsby/create-writing-pages')(...args)
	])
}
