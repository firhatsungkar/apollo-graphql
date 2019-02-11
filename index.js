const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const schema = require('./schema')

const app = express()
const PORT = 4000

const server = new ApolloServer(schema)
server.applyMiddleware({ app })

app.listen({port: PORT}, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`))