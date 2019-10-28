const onCreatePage = require('./gatsby/on-create-page')
const onCreateNode = require('./gatsby/on-create-node')

exports.onCreatePage = onCreatePage
exports.onCreateNode = onCreateNode

exports.createPages = async (...args) => {
  await Promise.all([
		require('./gatsby/create-writing-pages')(...args)
	])
}
