/* eslint-env node */
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
const path = require('path')
const siteConfig = require('./content/site-config')

module.exports = {
	siteMetadata: {
		...siteConfig,
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
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
					'~': path.resolve(__dirname, 'src/'),
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
			resolve: `gatsby-plugin-mdx`,
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 2400,
							linkImagesToOriginal: false,
							backgroundColor: 'none',
							quality: 88,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/translations`,
				name: `translations`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/writing`,
				name: `writing`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/experience`,
				name: `experience`,
			},
		},
		`gatsby-transformer-json`,
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
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
						}
          }
        `,
				feeds: [
					{
						serialize: ({ query: { site, allMdx } }) => allMdx.edges.map(({ node }) => {
							const url = `${site.siteMetadata.siteUrl}/writing/${node.frontmatter.slug}`
							return {
								title: node.frontmatter.title,
								description: node.frontmatter.description,
								excerpt: node.excerpt,
								date: node.frontmatter.date,
								url,
								guid: url,
							}
						}),
						query: `{
							allMdx(
								filter: { fileAbsolutePath: { regex: "/writing/" } },
								sort: { fields: [frontmatter___date], order: DESC }
							) {
								edges {
									node {
										frontmatter {
											title
											date(formatString: "DD-MM-YYYY")
											slug
											description
										}
										excerpt(pruneLength: 255)
										fields {
											locale
										}
									}
								}
							}
						}`,
						output: '/rss.xml',
						title: 'Vitor Dino',
						// optional configuration to insert feed reference in pages:
						// if `string` is used, it will be used to create RegExp and then test if pathname of
						// current page satisfied this regular expression;
						// if not provided or `undefined`, all pages will have feed reference inserted
						match: '^/writing/',
					},
				],
			},
		},
		`gatsby-plugin-netlify`,
	],
}
