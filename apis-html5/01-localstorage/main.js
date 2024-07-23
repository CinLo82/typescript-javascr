//comprobar si el navegador es compatible con local storage
if (typeof(Storage) !== "undefined") { 
    console.log("Local storage disponible");
}
else {
    console.log("Local storage no disponible");
}
// almacenar datos
localStorage.setItem("nombre1", "Cinlo Losada");
localStorage.setItem("nombre2", "Cecilia Perez");
localStorage.setItem("nombre3", "Lucia Gonzales");

// recuperar datos
let datos = document.querySelector('#datos')
datos.innerHTML = `<p id="nombre1"> Nombre 1 ${localStorage.getItem("nombre1")} <button>Borrar</button></p>`;
datos.innerHTML += `<p id="nombre2"> Nombre 2 ${localStorage.getItem("nombre2")} <button>Borrar</button></p>`;
datos.innerHTML += `<p id="nombre3"> Nombre 3 ${localStorage.getItem("nombre3")} <button>Borrar</button></p>`;

// eliminar datos
localStorage.removeItem("nombre");

let elementos = document.querySelectorAll('p button')

elementos.forEach((elemento) => {
    elemento.addEventListener('click', (event) => {
        let padre = event.target.parentElement;

        localStorage.removeItem(padre.getAttribute('id'))
        padre.remove();
    })
})

// eliminar todos los datos
document.querySelector('#all').addEventListener('click', (event) => {
    event.target.remove()
    localStorage.clear();
    datos.innerHTML = '';
})

// sacar objeto del localstorage
let person = JSON.parse(localStorage.getItem('person'))
console.log(person)
datos.innerHTML += person.sitio 
