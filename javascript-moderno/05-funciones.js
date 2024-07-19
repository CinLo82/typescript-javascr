//parametros por defecto se usan para cuando en el llamado a la funcion no se le pasa nada
function hello(person = 'Cinlo', year = 2020) { 
   // let year = 2024;
    let rest = 80 - 5;
    return 'Hello, I send you my regards ' + person + ' estamos a ' + year;
}

console.log(hello('cinlo', 2023))
console.log(hello('pepe'))
console.log(hello('juan', 2024))
console.log(hello('jacinto'))

// funciones flecha =>

let hello2 = function (person, year) {
    return 'Hello, I send you my regards ' + person + ' estamos a ' + year;
}
console.log(hello2('cinlo', 2023));

let hello3 = person => 'Hello, I send you my regards ' + person;
console.log(hello3('cinlo'));

let hello4 = (person, pais) => 'Hello, I send you my regards ' + person + ' de ' + pais;
console.log(hello4('cinlo', 'Argentina'));

let hello5 = (person, pais) => {
    let continente = 'America'
    if(pais !== 'Agentina'){
        continente = 'Europa'
    }

    return 'Hello, I send you my regards ' + person + ' de ' + pais + ' y el continente es ' + continente;
}
console.log(hello5('cinlo', 'España'));

// Resumen

function multiplication(n1,n2) {
    return n1 * n2;
}
console.log(multiplication(2,3));


let multiplication2 = (n1,n2) => n1*n2
    console.log(multiplication2(2,6));

  // JSON
let store = {
    name: 'GAME',
    videojuegos: ['GTA', 'WWE', 'FIFA'],
    watch: function() {
        console.log('Estoy jugando ' + this.videojuegos[0]);
    },
    watch2() {
        this.videojuegos.forEach(juego => console.log(juego))
    },
    watch3: () => {
        console.log('Estoy jugando ' + store.videojuegos[2]);
    }
}

store.watch()
store.watch2()
store.watch3()
