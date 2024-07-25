import Storage from "./storage.js"
import List from "./list.js"

export default function () {

    //crear los objetos
    const storage = new Storage()
    const list = new List()

    //conseguir datos de las peliculas disponibles
    let pelis_stored = storage.getData()
    let pelis_viewed = document.querySelectorAll('#content .peli-item')
    
    //recorrer peliculas mostradas
    pelis_viewed.forEach(peli => {
        //buscar el boton de eliminar
        let delete_btn = peli.querySelector('.delete')
        //escuchar el evento click
        delete_btn.onclick = (e) => {
            //conseguir el id de la pelicula a eliminar
            let id = e.target.getAttribute('data-id')
            //filtrar la pelicula a eliminar
            let pelis_filtered = pelis_stored.filter(peli => peli.id != id)
            //guardar la nueva lista de peliculas
            storage.save(pelis_filtered)
            //actualizar la lista de peliculas
            list.show(pelis_filtered)
        }
    })

}