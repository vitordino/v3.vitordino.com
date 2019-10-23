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






// -------

// Use a little helper function to remove trailing slashes from paths
const removeTrailingSlash = path =>
  path === `/` ? path : path.replace(/\/$/, ``)

const localizedSlug = ({ isDefault, locale, slug }) =>
  isDefault ? `/${slug}` : `/${locale}/${slug}`

// From lodash:
// https://github.com/lodash/lodash/blob/750067f42d3aa5f927604ece2c6df0ff2b2e9d72/findKey.js
const findKey = (object, predicate) => {
  let result
  if (object == null) {
    return result
  }
  Object.keys(object).some(key => {
    const value = object[key]
    if (predicate(value, key, object)) {
      result = key
      return true
    }
    return false
  })
  return result
}


module.exports = {
	replaceTrailing,
	replaceBoth,
	createQuery,
	getLocalizedPath,
	removeTrailingSlash,
	localizedSlug,
	findKey,
}
