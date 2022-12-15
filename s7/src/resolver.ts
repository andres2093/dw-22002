import { BookController } from "./controller/BookController"
import { UserController } from "./controller/UserController"

const bookController = new BookController()
const userController = new UserController()

export const resolvers = {
    Query: {
        getAllBooks: (_, __, { token }) => bookController.getBooks(),
        getBook: (_, { asin }, { token }) => bookController.getBook(asin)
    },
    Mutation: {
        insertBook: (_, { asin, title, author, pages }, { token }) => bookController.saveBook(asin, title, author, pages),
        updateBook: (_, { asin, title, author, pages }, { token }) => bookController.updateBook(asin, title, author, pages),
        signUp: (_, { input: user }) => userController.saveUser(user),
        signIn: (_, { email, password }) => userController.getUserToken(email, password)
    }
}