const authors = require('../data/author')
const books = require('../data/book')

const typeDef = `
  extend type Query {
    authors: [Author]
    author(id: Int!): Author
  }
  type Author {
    id: Int!
    first_name: String
    last_name: String
    books: [Book]
  }
`

const resolvers = {
  Query: {
    authors: () => authors,
    author: (_,{id}) => authors.find(author => author.id === id)
  },
  Author: {
    books: ({id}) => books.filter(book => book.author_id === id)
  },
}

module.exports = {
  typeDef,
  resolvers
}