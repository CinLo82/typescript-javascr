export default class List{
    constructor(){
        // seleccionar elementos del dom a usar
        this.content = document.querySelector('#content')
    }

    templete(peli){
        //plantilla de pelicula a gregar
        return `
            <article class="peli-item" id="peli-${peli.id}" >
                <h3 class="title">${peli.title}</h3>
                <p class="description">${peli.description}</p>

                <button class="edit" data-id="${peli.id}" >Editar</button>
                <button class="delete" data-id="${peli.id}" >Eliminar</button>
            </article>
        `
    }



    show(pelis){
        //vaciar el dom del contenedor de peliculas
        this.content.innerHTML = "";

        //recorrer y mostrar todos los objetos del local storage
        pelis.forEach(peli => {
            this.content.innerHTML += this.templete(peli)
        })
    }
}