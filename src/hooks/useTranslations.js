import { useStaticQuery, graphql } from 'gatsby'
import useLocale from '@/store/locale'
import flattenEdges from '@/utils/flattenEdges'

function useTranslations() {
	const { locale } = useLocale()
	const { rawData } = useStaticQuery(query)
	const selected = flattenEdges(rawData)?.find(lang => lang.name === locale)
	return selected?.translations
}

export default useTranslations

const query = graphql`
	query useTranslations {
		rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
			edges {
				node {
					name
					translations: childTranslationsJson {
						hello
						subline
						backToHome
						paths {
							writing
						}
					}
				}
			}
		}
	}
`
