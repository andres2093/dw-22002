import 'dotenv/config'
import { sequelize } from './db'
import { logger } from "./logger"

const connection = async () => {
  try {
    await sequelize.authenticate()
    logger.info('Conexión establecida!!!')
    // console.log(await sequelize.models.Book.findAll());
    // const book = await sequelize.models.Book.create({
    //   username: 'alice123',
    //   isAdmin: true
    // }, { fields: ['username'] });
    // console.log(book);
    // console.log(await sequelize.models.Book.findAll());
  } catch (error) {
    logger.error('Error al conectarse a la DB:', error)
  }
}
connection()