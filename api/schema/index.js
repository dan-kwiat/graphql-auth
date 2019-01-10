const { makeExecutableSchema } = require('graphql-tools')
const { getArticlesForAuthor } = require('../controllers')
const { directiveResolvers } = require('../directives')

const typeDefs = `
  directive @isAuthenticated on QUERY | FIELD_DEFINITION
  directive @hasScope(scopes: [String]) on QUERY | FIELD_DEFINITION

  type Article {
    id: ID!
    authorId: ID!
    authorName: String!
    articleName: String!
    link: String!
    review: Review @hasScope(scopes: ["read:review"])
  }
  
  type Review {
    rating: Int
    comment: String
  }

  type Query {
    allArticles: [Article] @isAuthenticated
  }
`

const resolvers = {
  Query: {
    allArticles: (_, args, context) => getArticlesForAuthor(context.user),
  },
}

const schema = makeExecutableSchema({ typeDefs, resolvers, directiveResolvers })

module.exports = schema
