/* eslint-env node */
const locales = require('../content/i18n')

const concat = (strings, ...exps) =>
	typeof strings === 'string'
		? strings
		: exps.reduce((str, exp, i) => `${str}${exp}${strings[i + 1]}`, strings[0])

const replaceTrailing = path => (path === `/` ? path : path.replace(/\/$/, ``))

const replaceBoth = path => path.replace(/^\/|\/$/g, '')

const createQuery = name => (..._query) => async graphql => {
	const query = concat(..._query)
	const { data, errors } = await graphql(`query ${name}Query { ${query} }`)
	if (!errors || !errors.length) return data
	errors.forEach(e => console.error(e.toString())) // eslint-disable-line
	throw errors
}

const getLocalizedPath = (locale, url) =>
	replaceTrailing(
		locales[locale].default ? `/${url}` : `/${locales[locale].path}/${url}`,
	)

module.exports = {
	replaceTrailing,
	replaceBoth,
	createQuery,
	getLocalizedPath,
}
