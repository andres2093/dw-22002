### Queries

```
query {
  helloWorld,
  hello(nombre: "Andrés"),
  getAllBooks {
    asin, author, pages, title
  },
  getBook(asin: "B00DQ845EA") {
    asin, author, pages, title
  }
},
mutation {
  updateBook(asin: "B00DQ845EA", title: "Prueba") {
    asin,title
  }
}
```