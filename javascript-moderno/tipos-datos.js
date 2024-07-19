//string
let name = 'Cintia Losada';

// number
let number = 14;
let decimal = 3.2;

//boolean; 1 es true o es false
let isTrue = true;

//array
let countries = ['España', 'Argentina', 'Mexico']

// null - que no existe ese dato
let vacio = null

// undefined - valor no asignado, valor indefinido
let un_defined = undefined

/*
console.log(
    typeof number, 
    typeof decimal, 
    typeof name,
    typeof isTrue,
    typeof countries,
    typeof vacio,
    typeof un_defined
)
 */

//JSON JS Object Notation- Objects Literals; se usan para guardar colecciones de varios datos
let movie = {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    cast: ['Tim Robbins', 'Morgan Freeman'],
    watch: function(){
        return `
        ****LA PELICULA DE LA SEMAAN**** \n
        Titulo: ${this.title} \n
        Año: ${this.year} \n
        Director: ${this.director} \n
        Actores: ${this.cast[0]} y ${this.cast[1]} \n
        `
    }   
}

movie['pais'] = 'State Unites';
delete movie.director;

//console.log(movie);
 //console.log('director' in movie) de esta manero compruebo si director forma la aprete de mi objeto movie

for (let propiedad in movie){
    let data_current = movie[propiedad]
    if(
        data_current !== null && typeof(data_current) !== 'function') {
            console.log(data_current)
        }

}

// symbol nuevo tipo de dato de javascript; representa un identificador unico
let animal = Symbol('tigre')
let animal2 = Symbol('tigre')

console.log(animal === animal2)

let user = {
    id: 1,
    name: 'Juan',
    age: 20,
}

let id = Symbol('id')
user[id] = 7
console.log(user)