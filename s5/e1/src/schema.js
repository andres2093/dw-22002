import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    getAllBooks: [Book]
  }
  type Book {
    asin: ID,
    title: String,
    author: String,
    pages: Int
  }
`