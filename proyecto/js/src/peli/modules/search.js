import List from "./list.js";
import Storage from "./storage.js";

export default function() {
    // crear los objetos
    const storage = new Storage();
    const list = new List();

    //elementos del dom
    const content = document.querySelector('#content');
    const search_btn = document.querySelector('#search');
    //aplicar evento al formulario de busqueda
    search_btn.onclick = function(e) {
        e.preventDefault();
        //conseguir el valor del input de busqueda
        const wanted = document.querySelector('#search_field').value;
        //conseguir los datos de las peliculas
        const pelis_stored = storage.getData();
        //filtrar las peliculas que coincidan con la busqueda
        const new_pelis = pelis_stored.filter(peli => {
            return peli.title.toLowerCase().includes(wanted.toLowerCase());
        })
        //mostrar las peliculas filtradas
        if(new_pelis.length <= 0) {
            content.innerHTML = '<p>No hay peliculas que coincidan con la busqueda</p>'
            return false
        } list.show(new_pelis);
        return false
    }
}    