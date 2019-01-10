let ARTICLES = require('./../data/articles')

const getArticlesForAuthor = user => {
  return ARTICLES.filter(article => article.authorId === user.sub)
}

module.exports = { getArticlesForAuthor }
