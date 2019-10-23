const enPaths = require('./translations/en.json').paths
const ptPaths = require('./translations/pt.json').paths

module.exports = {
	en: {
		default: true,
		path: 'en',
		locale: 'en-us',
		siteLanguage: 'en',
		ogLang: 'en_US',
		dateFormat: `MM.DD.YYYY`,
		paths: enPaths,
	},
	pt: {
		path: 'pt',
		locale: 'pt-br',
		siteLanguage: 'pt',
		ogLang: 'pt_BR',
		dateFormat: `DD.MM.YYYY`,
		paths: ptPaths,
	},
}
