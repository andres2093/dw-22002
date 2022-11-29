const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    saludo: String,
    experto(id:ID!): Experto,
    getAllExpertos: [Experto]
  },
  type Experto {
    id: ID,
    nombre: String,
    apellido: String
  }
`)

module.exports = { schema }