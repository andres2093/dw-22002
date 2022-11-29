const resolver = {
  saludo: () => 'Hola Beto!',
  experto: ({ id }) => expertos.find(e => e.id == id),
  getAllExpertos: () => expertos
}

const expertos = [
  {id: 333, nombre: "Andrés", apellido: "Ramirez"},
  {id: 334, nombre: "Carlos", apellido: "Cortes"},
  {id: 335, nombre: "Luis", apellido: "Ramos"}
]

module.exports = { resolver }