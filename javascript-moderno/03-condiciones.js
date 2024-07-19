// Operador ternario
let person = ['Julian', 70]

if(person[1] >= 18){
    console.log('es mayor de edad')
} else {
    console.log('es menor de edad')
}
//usando operador ternario => sintaxis: condición ? expresión1 : expresión2

let edad = person[1] >= 18 ?  'es mayor de edad' :'es menor de edad'
    console.log(edad)

let existe = person ? 'existe' : 'no existe'
    console.log(existe)

// diferencia entre == y === y !==

let edad1 = 80
let edad2 = '80'
if (edad1 == edad2){ // el == no evalua el tipo de dato
    console.log('son iguales')
}else{
    console.log('son diferentes')
}

