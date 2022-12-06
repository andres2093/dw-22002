const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  #Definición de schema
  type Query {
    helloWorld: String
  }
`

const resolvers = {
  Query: {
    helloWorld: () => 'Hola mundo!!!'
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
  console.log(`Servidor corriendo en ${url}`);
})