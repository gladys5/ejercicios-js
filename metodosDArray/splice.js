let productos = [
  ["jabon", 10, "cuidado personal", "alal", "arros", 1, "f"],
  ["jabon", 10, "cuidado personal", "alal", "arros", 2, "f"],
  ["jabon", 10, "cuidado personal", "alal", "arros", 3, "f"],
  ["jabon", 10, "cuidado personal", "alal", "arros", 4, "f"],
  ["jabon", 10, "cuidado personal", "alal", "arros", 5, "f"],
  ["jabon", 10, "cuidado personal", "alal", "arros", 6, "f"],
  ["jabon", 10, "cuidado personal", "alal", "arros", 7, "f"],
  ["jabon", 10, "cuidado personal", "alal", "arros", 8, "f"],
  ["jabon", 10, "cuidado personal", "alal", "arros", 9, "f"],
  ["jabon", 10, "cuidado personal", "alal", "arros", 10, "f"],
  ["jabon", 10, "cuidado personal", "alal", "arros", 11, "f"],
  ["jabon", 10, "cuidado personal", "alal", "arros", 12, "f"],
]
let metodoSplice = productos.splice(2, 0, ["silla"])
//console.log(metodoSplice)
console.log(productos)
//splice resive 3 parametros 1.la pocicion en la que se insertara el elemento,2.apartir de que posicion se eliminara array,3.el elemento que se insertara
