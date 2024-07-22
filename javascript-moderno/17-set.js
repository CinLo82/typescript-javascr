//crear el set
let gadgets = new Set(['MOvil', 'Tablet', 'Portatil'])
console.log(gadgets)

//agregar elementos
gadgets.add('Laptop')
gadgets.add('Tablet')
gadgets.add('TV')
gadgets.add('SmartPhone')
gadgets.add('Camara')

//tamaño del set
console.log(gadgets.size)

// eliminar elementos
gadgets.delete('Camara')

console.log(gadgets.size)

//comprobar la existencia 
console.log(gadgets.has('Camara'))
console.log(gadgets.has('TV'))

//elimminar todo el contenido
gadgets.clear()

console.log(gadgets.size)

//recorrer el set
for(let item of gadgets){
    console.log(item)
}

