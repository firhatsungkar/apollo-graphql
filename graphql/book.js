const books = require('../data/book')
const authors = require('../data/author')
const typeDef = `
  extend type Query {
    books: [Book]
    book(id: Int!): Book
  }
  type Book {
    id: Int!
    title: String,
    author: Author
  }
`

const resolvers = {
  Query: {
    books: () => books,
    book: (_, {id}) => books.find(book => book.id === id)
  },
  Book: {
    author: ({author_id}) => authors.find(author => author.id === author_id)
  }
}

module.exports = {
  typeDef,
  resolvers
}