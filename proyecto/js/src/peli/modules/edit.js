import List from "./list.js"
import Storage from "./storage.js"

export default function() {
    //crear los objetos
    const storage = new Storage()
    const list = new List()
    //conseguir datos de las peliculas disponibles
    let pelis_stored = storage.getData()
    let pelis_viewed = document.querySelectorAll('#content .peli-item')
    //recorrer peliculas mostradas
    pelis_viewed.forEach(peli => {
        // seleccionar ell boton de editar
        let edit_btn = peli.querySelector('.edit')
        // escuchar el evento click
        edit_btn.onclick = function() {
            // conseguir el id de la pelicula a editar
            const peli_id = parseInt(this.getAttribute('data-id'))
            //quitar botones antiguos
            edit_btn.remove()
            peli.querySelector('.delete').remove();

            // añadir html de bajo de los botones, donde se podran editar
            let peli_edit_html = `
            <div class="edit_form">
                <h3 class="title">Editar pelicula</h3>
                <form>
                </form>
                <input type="text" id="edited_title" value="${peli.querySelector('.title').innerHTML}">
                <textarea id="edited_description">${peli.querySelector('.description').innerHTML}</textarea>
                <input type='submit' class="update" value="Actualizar" />
            `
            peli.innerHTML += peli_edit_html

            // seleccionar el boton de actualizar
            let update_btn = peli.querySelector('.update')
            // escuchar el evento click
            update_btn.onclick = function(e) {
                e.preventDefault()
               // buscar el indice de la pelicula a ctualizas
                let peli_index = pelis_stored.findIndex(peli => peli.id === peli_id)
                // guardar el objeto dentro de ese indice
                pelis_stored[peli_index] = {
                    id: peli_id,
                    title: peli.querySelector('#edited_title').value,
                    description: peli.querySelector('#edited_description').value
                }

                //actualizar local storage
                storage.save(pelis_stored)

                //actualizar la lista de peliculas
                list.show(pelis_stored)
            }
        }
    })
}