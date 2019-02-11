const { makeExecutableSchema } = require('graphql-tools')
const { merge } = require('lodash')
const {typeDef: AuthorType, resolvers: AuthorResolvers} = require('./graphql/author')
const {typeDef: BookType, resolvers: BookResolvers} = require('./graphql/book')

const Query = `
  type Query {
    _empty: String
  }
`
const typeDefs = [Query, AuthorType, BookType]
const resolvers = merge(AuthorResolvers, BookResolvers)

module.exports = {
  typeDefs,
  resolvers
}
