// la desesctructuración en JS nos permite extraer datos de objetos, de arrays y string y convertirlo a variables de js

let fruits = ['Manzana', 'Pera', 'Naranja', 'Fresa']

// clasico
//let manzana = fruits[0]
//let pera = fruits[1]

// desestructurar array
let [manzana, pera, naranja, fresa] = fruits;

console.log(naranja);

// desestructurar objetos
let person = {
    name: 'Cinlo',
    pais: 'Argentina',
    edad: 80,
    altura: 165,

};

let {name, pais, edad, altura} = person;

// desestructurar string
let user = 'Cinlo losada web 78878787878G 09/09/1989 Buenos_Aires';

let [name1, lastname1, lastname2, dni, date, city] = user.split(' ')

// crear varias variables
let languaje = 'Js',
    framework = 'React',
    framework2 = 'Vue',
    framework3 = 'Angular';

// utilidad parametros funciones
function showInfo({name2, lastname3 = 'desconocido', city1}) {
    console.log(name2, lastname3, city1);
}
showInfo({ name2:'Cinlo', city1: 'La Plata'})