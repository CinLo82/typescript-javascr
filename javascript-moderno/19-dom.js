// seleccionar elementos con id 
//let container = document.getElementById('container')  manera tradicional
//let container = document.querySelector('#container')  manera moderna
// manera  de seleccionar multiples elementos
let contenedores = document.querySelectorAll('.contenedor')
console.log(contenedores)  // devuelve un array con los elementos seleccionados

contenedores.forEach((elemento, indice ) => {
    elemento.innerText = `Hola soy un texto ${indice} desde js`
    elemento.className = 'sheet'

    if(indice === 1){
        elemento.style.backgroundColor = 'orange'
    } else if (indice === 3){
        elemento.style.backgroundColor = 'green'
    } else {
        elemento.style.backgroundColor = 'coral'
    }
})

//container.style.border = '1px solid black'
//container.style.backgroundColor = 'gray'

// como seleccionar elementos con una clase