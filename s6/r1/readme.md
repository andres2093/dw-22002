### Queries
```
query {
  getAllBooks {
    asin, author, pages, title
  },
  getBook(asin: "B0001244HBN") {
    asin, author, pages, title
  }
}
mutation {
  insertBook(asin: "B0001244HBM", title: "title", author: "bedu1", pages: 160) {
    asin, author, pages, title
  },
  updateBook(asin: "B0001244HBN", title: "NodeJS") {
    asin, author, pages, title
  }
}
```