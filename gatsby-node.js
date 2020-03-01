/* eslint-env node */
exports.onCreatePage = require('./gatsby/on-create-page')
exports.onCreateNode = require('./gatsby/on-create-node')

exports.createPages = async (...args) => {
	await Promise.all([require('./gatsby/create-writing-pages')(...args)])
}
