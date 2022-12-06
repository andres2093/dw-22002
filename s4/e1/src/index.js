const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  #Definición de schema
  type Query {
    helloWorld: String
    hello(nombre:String!): String
  }
`

const resolvers = {
  Query: {
    helloWorld: () => `Hola world!!!`,
    hello: (_, { nombre }) => `Hola ${ nombre }`
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
  console.log(`Servidor corriendo en ${url}`);
})