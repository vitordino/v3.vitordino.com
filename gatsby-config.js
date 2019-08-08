require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})
const path = require('path')
const siteConfig = require('./content/site-config')

module.exports = {
	siteMetadata: {
		...siteConfig,
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: 'gatsby-source-prismic',
			options: {
				repositoryName: 'vitordino',
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-eslint`,
			options: {
				test: /\.js$/,
				exclude: /(node_modules|.cache|public)/,
				stages: ['develop'],
				options: {
					emitWarning: true,
					failOnError: false,
				},
			},
		},
		`gatsby-plugin-webpack-size`,
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@': path.resolve(__dirname, 'src/'),
				},
				extensions: [],
			},
		},
		{
			resolve: `gatsby-plugin-react-svg`,
			options: {
				rule: {
					include: /images\/.*\.svg$/,
				},
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: siteConfig.title,
				short_name: siteConfig.shortName,
				start_url: `/`,
				background_color: siteConfig.themeColor,
				theme_color: siteConfig.themeColor,
				display: `minimal-ui`,
				icon: siteConfig.logo,
			},
		},
	],
}
