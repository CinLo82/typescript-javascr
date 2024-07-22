// tipos de datos basicos
let text: string = 'Hola q tal!!'
text = 'hola' // no se le puede asignar otro tipo de dato q no sea number

//number
let number: number = 10
number = 10.5 // no se le puede asignar otro tipo de dato q no sea number
console.log(number)

// boolean
let boolean: boolean = true
boolean = false 
console.log(boolean)

// any => este tipo de dato nos va a permitir reasiganrle cualq tipo de dato a nuestra variable
let text1: any = 'hola'
text1 = 10
text1 = false
console.log(text1)

//unknow
let cualquiera: unknown = 'Soy un texto'
cualquiera = 10
cualquiera = false

if (typeof cualquiera === 'number'){
    let mi_number: number = cualquiera
}
