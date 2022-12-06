export const resolvers = {
  Query: {
    helloWorld: () => `Hola world!!!`,
    hello: (_, { nombre }) => `Hola ${ nombre }`,
    getAllBooks: () => books,
    getBook: (_, { asin }) => books.find(b => b.asin == asin)
  }
}

const books = [
  { asin: 'B00DQ845EA', title: 'The Hard Thing About Hard Things', author: 'Ben Horowitz', pages: 308 },
  { asin: 'B015NTIXWE', title: 'Ego Is the Enemy', author: 'Ryan Holiday', pages: 247 },
  { asin: 'B00ICN066A', title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', pages: 469 },
]