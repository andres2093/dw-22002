const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    saludo: String
  }
`)

module.exports = { schema }