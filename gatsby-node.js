/* eslint-env node */
/* eslint-disable global-require */
const onCreatePage = require('./gatsby/on-create-page')

// create pages with localized paths
const createPages = async (...args) => {
	await Promise.all([require('./gatsby/create-home')(...args)])
}

module.exports = {
	onCreatePage,
	createPages,
}
