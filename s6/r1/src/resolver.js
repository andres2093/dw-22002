import { sequelize } from "./db"
import { logger } from "./logger"
import { ApolloError } from "apollo-server-errors"

export const resolvers = {
  Query: {
    getAllBooks: async () => await sequelize.models.Book.findAll(),
    getBook: async (_, { asin }) => {
      return await sequelize.models.Book.findOne({
        where: { asin } // asin: asin
      })
    }
  },
  Mutation: {
    insertBook: async (_, { asin, title, author, pages }) => {
      return await sequelize.models.Book.create({
        asin, title, author, pages
      })
    },
    updateBook: async (_, { asin, title, author, pages }) => {
      // buscamos el libro con base al asin proporcionado
      let bookFound = await sequelize.models.Book.findOne({
        where: { asin } // asin: asin
      })
      // Sino lo encontramos lanzamos un error
      if (!bookFound) {
          logger.error(`Book not found with asin: ${asin}`)
          throw new ApolloError('Book not found', 'ERR003');
      }
      // En caso de encontrarlo actualizamos las propiedades que no vengan nulas
      title && (bookFound.title = title)
      author && (bookFound.author = author)
      pages && (bookFound.pages = pages)
      // Actualizamos el libro
      bookFound.save()
      return bookFound;
  },
  }
}