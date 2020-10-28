# vitordino.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/a5a3ac2e-c351-4946-816a-6475090d6a70/deploy-status)](https://app.netlify.com/sites/vitordino/deploys)

### System Dependencies

| name   | min. version |
| :----- | -----------: |
| `node` |     `12.0.0` |
| `yarn` |      `1.0.0` |

## Guide

```bash
# install both projects dependencies
$ yarn

# start development server
$ yarn dev

# build static site
$ yarn build # outputs to ./public directory
```

## Commit Standard

this repo follows the [gitmoji](https://gitmoji.carloscuesta.me/) specification, and enforce it with a custom git-hook, so you need to follow it in order to be able to commit.

## Tech Stack

| name                                                 | license                                                                             | description                                                          |
| :--------------------------------------------------- | :---------------------------------------------------------------------------------- | :------------------------------------------------------------------- |
| [`react`](https://reactjs.org/)                      | [`MIT`](https://api.github.com/repos/facebook/react/license)                        | declarative, component-based, functional approach to user interfaces |
| [`styled-components`](https://styled-components.com) | [`MIT`](https://github.com/styled-components/styled-components/blob/master/LICENSE) | visual primitives for the component age                              |
| [`gatsby`](https://www.gatsbyjs.com/)                | [`MIT`](https://github.com/gatsbyjs/gatsby/blob/master/LICENSE)                     | build blazing fast, modern apps and websites with react              |
| [`etymos`](https://github.com/vitordino/etymos)      | [`MIT`](https://github.com/vitordino/etymos/blob/master/LICENSE)                    | responsive toolkit for declarative styled-components                 |
