const locales = require('../content/i18n')
const { replaceTrailing } = require('./helpers')

module.exports = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  Object.keys(locales).map(lang => {
    const localizedPath = locales[lang].default
      ? page.path
      : `${locales[lang].path}${page.path}`
    return createPage({
      ...page,
      path: replaceTrailing(localizedPath),
      context: {
        ...page.context,
        locale: lang,
        dateFormat: locales[lang].dateFormat,
      },
    })
  })
}
