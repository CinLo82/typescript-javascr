let my_object = {
    name: 'Cinlo',
    lastName: 'Apellidos',
    sitio:'Cinlolosadaweb.es'
}
let object_string = JSON.stringify(my_object)
console.log(my_object)
console.log(object_string)

localStorage.setItem('person', object_string)