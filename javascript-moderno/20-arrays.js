// buscar en un array
const people = ['Cinlo', 'Cecilia', 'Lucia', 'Victoria'];

let search = people.find(person =>  person === 'Cecilia');
console.log(search)

// buscar con findIndex
let searchIndex = people.findIndex(person =>  person === 'Lucia');
console.log(searchIndex)

// crear array basandome en un objeto iterable
let array_letters = Array.from('Cinlolosadaweb.net')
console.log(array_letters)

let array_numbers_square = Array.from([1,2,3,4,5,6,7,8], number => number*number)
console.log(array_numbers_square)

// comprobar si existe un elemento dentro del array
let search2 = people.includes('Cecilia')
console.log(search2)

// filtrar arrays- crea un array con todos los elementos que cumplan con la condicion que le demos
let new_people = people.filter(person => person.length > 5)
console.log(new_people)
let new_people2 = people.filter(person => person.includes('n'))
console.log(new_people2)