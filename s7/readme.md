### Insertar libro
```
mutation {
  insertBook(asin: "B0001244HBN", title: "bedu", author: "beto", pages: 180) {
    asin, author, pages, title
  }
}
```

### Obtener todos los libros
```
query {
  getAllBooks {
    asin, author, pages, title
  }
}
```

### Obtener un libro
```
query {
  getBook(asin: "B0001244HBM") {
    asin, author, pages, title
  }
}
```

### Actualizar libro
``` 
mutation {
  updateBook(asin: "B0001244HBM", title: "typeScript") {
    title
  }
}
```