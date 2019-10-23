const path = require(`path`)
const locales = require(`./content/i18n`)
const translations = require(`./content/translations`)

const {
  localizedSlug,
  findKey,
  removeTrailingSlash,
} = require(`./gatsby/helpers`)

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  Object.keys(locales).map(lang => {
    const localizedPath = locales[lang].default
      ? page.path
      : `${locales[lang].path}${page.path}`
    return createPage({
      ...page,
      path: removeTrailingSlash(localizedPath),
      context: {
        ...page.context,
        locale: lang,
        dateFormat: locales[lang].dateFormat,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const name = path.basename(node.fileAbsolutePath, `.mdx`)
    const isDefault = name === `index`
    const defaultKey = findKey(locales, o => o.default === true)
    const lang = isDefault ? defaultKey : name.split(`.`)[1]
    createNodeField({ node, name: `locale`, value: lang })
    createNodeField({ node, name: `isDefault`, value: isDefault })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = require.resolve(`./src/templates/post.js`)
  const result = await graphql(`{
    writing: allFile(filter: { sourceInstanceName: { eq: "writing" } }) {
      edges {
        node {
          childMdx {
            fields {
              locale
              isDefault
            }
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  }`)

  if (result.errors) {
    console.error(result.errors)
    return
  }

  const postList = result.data.writing.edges
  postList.forEach(({ node: post }) => {
    const title = post.childMdx.frontmatter.title
    const locale = post.childMdx.fields.locale
    const slug = `${translations[locale].paths.writing}/${post.childMdx.frontmatter.slug}`
    const isDefault = post.childMdx.fields.isDefault
    createPage({
      path: localizedSlug({ isDefault, locale, slug }),
      component: postTemplate,
      context: { locale, title, slug },
    })
  })
}
