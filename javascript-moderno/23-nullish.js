// nullish coalescing operator
function multiplication(number1, number2){
    number1 = (number1 == null ? 1 : number1)
    number2 = (number2 == null ? 1 : number2)

    return number1 * number2
}
console.log(multiplication(5,2))
console.log(multiplication(5)) // en este caso el 2do parametro seria 1, ya q como es null por nuestra condicion toma el valor 1

// nullish reduce el codigo de q teniamos
function multiplication2(number1, number2){
    number1 = number1 ?? 1;
    number2 = number2 ?? 1;

    return number1 * number2
}
console.log(multiplication2(5,4))
console.log(multiplication2(5, null)) 

function watchUser(id, user) {
    let mi_user = (id + ' ' + user) ?? 'Usuario desconocido'

    return mi_user
}

console.log(watchUser(3, 'cinlo'))

function watchUser2(id, user) {
    id = id ?? 0;
    user = user ?? 'Usuario desconocido';

    return id + ' ' + user
}

console.log(watchUser2(3))

