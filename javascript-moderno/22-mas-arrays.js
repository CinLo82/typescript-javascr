// some
let people = ['Cinlo', 'Juana', 'Nicolas', 'Joaquin'];
let existsSome = people.some(name => name === 'Joaquin');
console.log(existsSome); 

// every
let countries = [
    {
        name: 'España',
        continente: 'Europa'
    },
    {
        name: 'Francia',
        continente: 'Europa'
    },
    {
        name: 'Italia',
        continente: 'Europa'
    },
]
let existsEvery = countries.every(country => country.continente === 'Europa');
console.log(existsEvery)

//map
let new_people2 = people.map(person => console.log(person))

//reduce
console.log(people.reduce((acumulador, actual) => {
    let valor_actual = ', '+ actual
    return acumulador + valor_actual
}))