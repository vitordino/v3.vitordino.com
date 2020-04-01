const path = require('path')

module.exports = {
	title: `Vitor Dino`,
	shortName: `Vitor Dino`,
	description: `move fast, learn every day`,
	author: `@vitordino`,
	keywords: ['design', 'development', 'interface', 'digital', 'product'],
	siteUrl: process.env.URL || 'http://localhost:8000',
	themeColor: '#000',
	backgroundColor: '#fff',
	pathPrefix: '/',
	logo: path.resolve(__dirname, '../src/assets/images/icon.png'),
}
