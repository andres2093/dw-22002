import 'dotenv/config'
import bcrypt from 'bcrypt'
import { logger } from './logger'

// Ejemplo 01
const saltRounds = 10

const passTexto = "qwerty"
const otroPassTexto = "qwerty123"

const generaHash = async (pass, saltRounds) => {
  try {
    logger.debug(`bcrypt hash: ${await bcrypt.hash(pass, saltRounds)}`)
    console.log(`bcrypt hash: ${await bcrypt.hash(pass, saltRounds)}`)
  } catch (error) {
    console.log(error)
    logger.error(error)
  }
}

// generaHash(passTexto, saltRounds)
const hashDePassTexto = "$2b$10$ObhMwVe7qP/FxPgu3SQOJOeZJQyQBjtiqOkSg./4jWT/phopclEDa"

const comparaHash = async (llamada, pass, hash) => {
  try {
    logger.debug(`bcrypt compare: ${await bcrypt.compare(pass, hash)}`)
    console.log(`bcrypt compare: ${llamada} ${await bcrypt.compare(pass, hash)}`)
  } catch (error) {
    console.log(error)
    logger.error(error)
  }
}

comparaHash(1, passTexto, hashDePassTexto) // -> true
comparaHash(2, passTexto, "$2b$10$ObhMwVe7qP/FxPgu3SQOJOeZJQyQBjtiqOkSg./4jWT/phopclEDb") // -> false
comparaHash(3, otroPassTexto, hashDePassTexto) // -> false