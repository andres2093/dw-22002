import { gql } from 'apollo-server'

export const typeDefs = gql`
  #Definición de schema
  type Query {
    helloWorld: String
    hello(nombre:String!): String,
    getAllBooks: [Book],
    getBook(asin:ID!): Book
  }

  type Book{
    asin: ID,
    title: String,
    author: String,
    pages: Int
  }
`