import { BookController } from "./controller/BookController"

const bookController = new BookController()

export const resolvers = {
    Query: {
        getAllBooks: (_, __, { token }) => bookController.getBooks(),
        getBook: (_, { asin }, { token }) => bookController.getBook(asin)
    },
    Mutation: {
        insertBook: (_, { asin, title, author, pages }, { token }) => bookController.saveBook(asin, title, author, pages),
        updateBook: (_, { asin, title, author, pages }, { token }) => bookController.updateBook(asin, title, author, pages),
        signUp: (_, { input: user }) => null,
        signIn: (_, { email, password }) => null
    }
}