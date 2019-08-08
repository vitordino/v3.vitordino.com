const getLocalizedContent = (data, locale) =>
	data?.content?.edges?.find(({ node }) => node?.lang === locale)?.node?.data ||
	{}

export default getLocalizedContent
