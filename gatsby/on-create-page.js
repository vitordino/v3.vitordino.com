const { replaceTrailing, replaceBoth, getLocalizedPath } = require('./helpers')
const locales = require('../content/i18n')

module.exports = ({ page, actions }) => {
	const { createPage, deletePage } = actions
	deletePage(page)
	Object.keys(locales).map(locale =>
		createPage({
			...page,
			path: getLocalizedPath(locale, replaceTrailing(page.path)),
			context: {
				locale,
				name: replaceBoth(page.path),
			},
		}),
	)
}
