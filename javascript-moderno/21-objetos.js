let title = 'El señor de los anillos'
let gender = 'acción'
let year = 2001
let director = 'Peter Jackson'
let actors = ['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen','Orlando Bloom']

const movie = {
    title,
    gender,
    year,
    director,
    actors,
    [gender + year]: 'Hola',
    watch(){
        return this.title + ', ' +  this.actors
    }
}
console.log(movie.watch())
console.log(Object.values(movie))
Object.entries(movie).forEach(([clave, valor]) => console.log(clave, valor))